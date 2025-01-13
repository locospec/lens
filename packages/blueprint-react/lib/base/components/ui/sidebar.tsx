import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/base/hooks/use-mobile"
import { cn } from "@/base/lib/utils"
import { Button } from "@/base/components/ui/button"
import { Input } from "@/base/components/ui/input"
import { Separator } from "@/base/components/ui/separator"
import { Sheet, SheetContent } from "@/base/components/ui/sheet"
import { Skeleton } from "@/base/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/base/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "bp-group/sidebar-wrapper bp-flex bp-min-h-svh bp-w-full has-[[data-variant=inset]]:bp-bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "bp-flex bp-h-full bp-w-[--sidebar-width] bp-flex-col bp-bg-sidebar bp-text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="bp-w-[--sidebar-width] bp-bg-sidebar bp-p-0 bp-text-sidebar-foreground [&>button]:bp-hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="bp-flex bp-h-full bp-w-full bp-flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="bp-group bp-peer bp-hidden md:bp-block bp-text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "bp-duration-200 bp-relative bp-h-svh bp-w-[--sidebar-width] bp-bg-transparent bp-transition-[width] bp-ease-linear",
            "group-data-[collapsible=offcanvas]:bp-w-0",
            "group-data-[side=right]:bp-rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:bp-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:bp-w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "bp-duration-200 bp-fixed bp-inset-y-0 bp-z-10 bp-hidden bp-h-svh bp-w-[--sidebar-width] bp-transition-[left,right,width] bp-ease-linear md:bp-flex",
            side === "left"
              ? "bp-left-0 group-data-[collapsible=offcanvas]:bp-left-[calc(var(--sidebar-width)*-1)]"
              : "bp-right-0 group-data-[collapsible=offcanvas]:bp-right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "bp-p-2 group-data-[collapsible=icon]:bp-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:bp-w-[--sidebar-width-icon] group-data-[side=left]:bp-border-r group-data-[side=right]:bp-border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="bp-flex bp-h-full bp-w-full bp-flex-col bp-bg-sidebar group-data-[variant=floating]:bp-rounded-lg group-data-[variant=floating]:bp-border group-data-[variant=floating]:bp-border-sidebar-border group-data-[variant=floating]:bp-shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("bp-h-7 bp-w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="bp-sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "bp-absolute bp-inset-y-0 bp-z-20 bp-hidden bp-w-4 bp--translate-x-1/2 bp-transition-all bp-ease-linear after:bp-absolute after:bp-inset-y-0 after:bp-left-1/2 after:bp-w-[2px] hover:after:bp-bg-sidebar-border group-data-[side=left]:bp--right-4 group-data-[side=right]:bp-left-0 sm:bp-flex",
        "[[data-side=left]_&]:bp-cursor-w-resize [[data-side=right]_&]:bp-cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:bp-cursor-e-resize [[data-side=right][data-state=collapsed]_&]:bp-cursor-w-resize",
        "group-data-[collapsible=offcanvas]:bp-translate-x-0 group-data-[collapsible=offcanvas]:after:bp-left-full group-data-[collapsible=offcanvas]:hover:bp-bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:bp--right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:bp--left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "bp-relative bp-flex bp-min-h-svh bp-flex-1 bp-flex-col bp-bg-background",
        "peer-data-[variant=inset]:bp-min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:bp-m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:bp-ml-2 md:peer-data-[variant=inset]:bp-ml-0 md:peer-data-[variant=inset]:bp-rounded-xl md:peer-data-[variant=inset]:bp-shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "bp-h-8 bp-w-full bp-bg-background bp-shadow-none focus-visible:bp-ring-2 focus-visible:bp-ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("bp-flex bp-flex-col bp-gap-2 bp-p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("bp-flex bp-flex-col bp-gap-2 bp-p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("bp-mx-2 bp-w-auto bp-bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "bp-flex bp-min-h-0 bp-flex-1 bp-flex-col bp-gap-2 bp-overflow-auto group-data-[collapsible=icon]:bp-overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("bp-relative bp-flex bp-w-full bp-min-w-0 bp-flex-col bp-p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "bp-duration-200 bp-flex bp-h-8 bp-shrink-0 bp-items-center bp-rounded-md bp-px-2 bp-text-xs bp-font-medium bp-text-sidebar-foreground/70 bp-outline-none bp-ring-sidebar-ring bp-transition-[margin,opa] bp-ease-linear focus-visible:bp-ring-2 [&>svg]:bp-size-4 [&>svg]:bp-shrink-0",
        "group-data-[collapsible=icon]:bp--mt-8 group-data-[collapsible=icon]:bp-opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "bp-absolute bp-right-3 bp-top-3.5 bp-flex bp-aspect-square bp-w-5 bp-items-center bp-justify-center bp-rounded-md bp-p-0 bp-text-sidebar-foreground bp-outline-none bp-ring-sidebar-ring bp-transition-transform hover:bp-bg-sidebar-accent hover:bp-text-sidebar-accent-foreground focus-visible:bp-ring-2 [&>svg]:bp-size-4 [&>svg]:bp-shrink-0",
        // Increases the hit area of the button on mobile.
        "after:bp-absolute after:bp--inset-2 after:md:bp-hidden",
        "group-data-[collapsible=icon]:bp-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("bp-w-full bp-text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("bp-flex bp-w-full bp-min-w-0 bp-flex-col bp-gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("bp-group/menu-item bp-relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "bp-peer/menu-button bp-flex bp-w-full bp-items-center bp-gap-2 bp-overflow-hidden bp-rounded-md bp-p-2 bp-text-left bp-text-sm bp-outline-none bp-ring-sidebar-ring bp-transition-[width,height,padding] hover:bp-bg-sidebar-accent hover:bp-text-sidebar-accent-foreground focus-visible:bp-ring-2 active:bp-bg-sidebar-accent active:bp-text-sidebar-accent-foreground disabled:bp-pointer-events-none disabled:bp-opacity-50 bp-group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:bp-pointer-events-none aria-disabled:bp-opacity-50 data-[active=true]:bp-bg-sidebar-accent data-[active=true]:bp-font-medium data-[active=true]:bp-text-sidebar-accent-foreground data-[state=open]:hover:bp-bg-sidebar-accent data-[state=open]:hover:bp-text-sidebar-accent-foreground group-data-[collapsible=icon]:bp-!size-8 group-data-[collapsible=icon]:bp-!p-2 [&>span:last-child]:bp-truncate [&>svg]:bp-size-4 [&>svg]:bp-shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bp-bg-sidebar-accent hover:bp-text-sidebar-accent-foreground",
        outline:
          "bp-bg-background bp-shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bp-bg-sidebar-accent hover:bp-text-sidebar-accent-foreground hover:bp-shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "bp-h-8 bp-text-sm",
        sm: "bp-h-7 bp-text-xs",
        lg: "bp-h-12 bp-text-sm group-data-[collapsible=icon]:bp-!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "bp-absolute bp-right-1 bp-top-1.5 bp-flex bp-aspect-square bp-w-5 bp-items-center bp-justify-center bp-rounded-md bp-p-0 bp-text-sidebar-foreground bp-outline-none bp-ring-sidebar-ring bp-transition-transform hover:bp-bg-sidebar-accent hover:bp-text-sidebar-accent-foreground focus-visible:bp-ring-2 bp-peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:bp-size-4 [&>svg]:bp-shrink-0",
        // Increases the hit area of the button on mobile.
        "after:bp-absolute after:bp--inset-2 after:md:bp-hidden",
        "bp-peer-data-[size=sm]/menu-button:top-1",
        "bp-peer-data-[size=default]/menu-button:top-1.5",
        "bp-peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:bp-hidden",
        showOnHover &&
          "bp-group-focus-within/menu-item:opacity-100 bp-group-hover/menu-item:opacity-100 data-[state=open]:bp-opacity-100 bp-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:bp-opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "bp-absolute bp-right-1 bp-flex bp-h-5 bp-min-w-5 bp-items-center bp-justify-center bp-rounded-md bp-px-1 bp-text-xs bp-font-medium bp-tabular-nums bp-text-sidebar-foreground bp-select-none bp-pointer-events-none",
      "bp-peer-hover/menu-button:text-sidebar-accent-foreground bp-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "bp-peer-data-[size=sm]/menu-button:top-1",
      "bp-peer-data-[size=default]/menu-button:top-1.5",
      "bp-peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:bp-hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("bp-rounded-md bp-h-8 bp-flex bp-gap-2 bp-px-2 bp-items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="bp-size-4 bp-rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="bp-h-4 bp-flex-1 bp-max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "bp-mx-3.5 bp-flex bp-min-w-0 bp-translate-x-px bp-flex-col bp-gap-1 bp-border-l bp-border-sidebar-border bp-px-2.5 bp-py-0.5",
      "group-data-[collapsible=icon]:bp-hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "bp-flex bp-h-7 bp-min-w-0 bp--translate-x-px bp-items-center bp-gap-2 bp-overflow-hidden bp-rounded-md bp-px-2 bp-text-sidebar-foreground bp-outline-none bp-ring-sidebar-ring hover:bp-bg-sidebar-accent hover:bp-text-sidebar-accent-foreground focus-visible:bp-ring-2 active:bp-bg-sidebar-accent active:bp-text-sidebar-accent-foreground disabled:bp-pointer-events-none disabled:bp-opacity-50 aria-disabled:bp-pointer-events-none aria-disabled:bp-opacity-50 [&>span:last-child]:bp-truncate [&>svg]:bp-size-4 [&>svg]:bp-shrink-0 [&>svg]:bp-text-sidebar-accent-foreground",
        "data-[active=true]:bp-bg-sidebar-accent data-[active=true]:bp-text-sidebar-accent-foreground",
        size === "sm" && "bp-text-xs",
        size === "md" && "bp-text-sm",
        "group-data-[collapsible=icon]:bp-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

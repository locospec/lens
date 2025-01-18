import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "../../../base/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../base/components/ui/breadcrumb";
import { Separator } from "../../../base/components/ui/separator";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

function ShellSidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bp-flex bp-h-16 bp-shrink-0 bp-items-center bp-gap-2 bp-transition-[width,height] bp-ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:bp-h-12">
          <div className="bp-flex bp-items-center bp-gap-2 bp-px-4">
            <SidebarTrigger className="bp--ml-1" />
            <Separator orientation="vertical" className="bp-h-4 bp-mr-2" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="bp-hidden md:bp-block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="bp-hidden md:bp-block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="bp-flex bp-flex-col bp-flex-1 bp-gap-4 bp-p-4 bp-pt-0">
          <div className="bp-grid bp-gap-4 bp-auto-rows-min md:bp-grid-cols-3">
            <div className="bp-aspect-video bp-rounded-xl bp-bg-muted/50" />
            <div className="bp-aspect-video bp-rounded-xl bp-bg-muted/50" />
            <div className="bp-aspect-video bp-rounded-xl bp-bg-muted/50" />
          </div>
          <div className="bp-min-h-[100vh] bp-flex-1 bp-rounded-xl bp-bg-muted/50 bp-md:min-h-min" />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export { ShellSidebar };

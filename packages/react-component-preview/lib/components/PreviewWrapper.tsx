"use client";
import * as React from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
// import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./lib";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./resizable";

import {
  Check,
  ChevronRight,
  Clipboard,
  File,
  Folder,
  Fullscreen,
  Monitor,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

interface PreviewWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export function PreviewWrapper({ children, className }: PreviewWrapperProps) {
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);
  const [width, setWidth] = React.useState<number>(0);
  const panelContentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!panelContentRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setWidth(Math.round(width));
    });

    observer.observe(panelContentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="twp">
      <div className="grid w-full gap-4">
        <div className="flex items-center justify-between mr-[12px]">
          <div className="p-2 text-xs">Width: {width}px</div>

          <div className="hidden h-7 items-center gap-1.5 rounded-md border p-[2px] shadow-none lg:flex">
            <ToggleGroup
              type="single"
              defaultValue="100"
              onValueChange={(value) => {
                if (resizablePanelRef?.current) {
                  resizablePanelRef.current.resize(parseInt(value));
                }
              }}
            >
              <ToggleGroupItem
                value="100"
                className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
                title="Desktop"
              >
                <Monitor className="h-3.5 w-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="60"
                className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
                title="Tablet"
              >
                <Tablet className="h-3.5 w-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="30"
                className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
                title="Mobile"
              >
                <Smartphone className="h-3.5 w-3.5" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <ResizablePanelGroup
          direction="horizontal"
          className="relative z-10 bg-gray-50"
        >
          <ResizablePanel ref={resizablePanelRef} className={`${className}`}>
            <div ref={panelContentRef}>{children}</div>
          </ResizablePanel>
          <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

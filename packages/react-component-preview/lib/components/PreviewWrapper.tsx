"use client";
import * as React from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./lib";

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
    <div className="group-data-[view=code]/block-view-wrapper:hidden twp">
      <div className="grid w-full gap-4">
        <ResizablePanelGroup direction="horizontal" className="relative z-10">
          <ResizablePanel
            ref={resizablePanelRef}
            className={`relative aspect-[4/2.5] rounded-xl border bg-background md:aspect-auto ${className}`}
            defaultSize={100}
            minSize={30}
          >
            <div ref={panelContentRef} className="relative">
              <div className="absolute p-1 text-xs bg-red-400 bottom-2 right-2">
                Width: {width}px
              </div>
              {children}
            </div>
          </ResizablePanel>
          <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

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

  return (
    <div className="group-data-[view=code]/block-view-wrapper:hidden md:h-[--height] twp">
      <div className="grid w-full gap-4">
        <ResizablePanelGroup direction="horizontal" className="relative z-10">
          <ResizablePanel
            ref={resizablePanelRef}
            className={`relative aspect-[4/2.5] rounded-xl border bg-background md:aspect-auto ${className}`}
            defaultSize={100}
            minSize={30}
          >
            {children}
          </ResizablePanel>
          <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

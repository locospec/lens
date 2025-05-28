import { cn } from "@lens/base/lib/utils";
import { JsonHighlighter } from "@lens/components/JsonHighlighter";
import { FileJson2Icon } from "lucide-react";
import { useState } from "react";

export interface LensDevToolsInterface {
  config: Record<string, any>;
}

const LensDevTools: React.FC<LensDevToolsInterface> = ({ config }) => {
  const [showJSONs, setShowJSONs] = useState(false);

  return (
    <>
      <div
        className={cn(
          "absolute bottom-2 left-2 z-50 cursor-pointer rounded-full border-[1px] bg-white p-1 hover:ring-2",
          showJSONs
            ? "border-blue-500 text-blue-500 hover:ring-blue-400"
            : "border-black ring-gray-400"
        )}
        onClick={() => setShowJSONs(!showJSONs)}
      >
        <FileJson2Icon size={16} />
      </div>
      {showJSONs && (
        <div className={cn("animate-in absolute left-0 top-0 z-40 bg-white")}>
          <JsonHighlighter json={config || {}} wrapper />
        </div>
      )}
    </>
  );
};

export { LensDevTools };

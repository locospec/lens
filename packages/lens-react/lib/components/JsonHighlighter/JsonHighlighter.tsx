import { cn } from "@lens/base/lib/utils";
import React from "react";

export interface JsonHighlighterProps {
  json: any;
  wrapper?: boolean;
  wrapperClasses?: string;
}

const JsonHighlighter: React.FC<JsonHighlighterProps> = ({
  json,
  wrapper = false,
  wrapperClasses = "",
}) => {
  const syntaxHighlight = (json: any): string => {
    if (typeof json !== "string") {
      json = JSON.stringify(json, undefined, 2);
    }

    json = json
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|\d+)/g,
      (match: any) => {
        let cls = "json-number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "json-key";
          } else {
            cls = "json-string";
          }
        } else if (/true|false/.test(match)) {
          cls = "json-boolean";
        } else if (/null/.test(match)) {
          cls = "json-null";
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
  };

  const highlightedJson = syntaxHighlight(json);

  const component = (
    <pre
      className="whitespace-pre-wrap break-all rounded bg-[var(--gray-a3)] p-2 text-xs leading-loose"
      style={{ wordBreak: "break-word" }}
    >
      <code dangerouslySetInnerHTML={{ __html: highlightedJson }} />
    </pre>
  );

  if (wrapper) {
    return (
      <div className={cn("h-screen overflow-scroll", wrapperClasses)}>
        {component}
      </div>
    );
  }

  return component;
};

export default JsonHighlighter;

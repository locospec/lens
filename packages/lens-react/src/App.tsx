import React from "react";
import { splitAndCapitalize } from "../lib/components/utils/splitAndCapitalize";
import "./App.css";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { makeServer } from "./mocks/mirageServer";
import ProviderExample from "./examples/ProviderExample";
import RawDataExample from "./examples/RawDataExample";

function App() {
  React.useEffect(() => {
    makeServer();
    return () => {
      makeServer().shutdown();
    };
  }, []);

  const components = ["raw_data", "provider"];

  return (
    <main className="le-w-screen le-h-screen le-overflow-hidden">
      <div className="le-w-full le-h-full le-flex">
        <div className="le-min-w-[50px] lg:le-min-w-[200px] le-w-[10vw] lg:le-w-[20vw] le-bg-gray-50 le-flex le-flex-col le-gap-y-2 le-p-4">
          <div className="le-flex le-flex-col le-gap-y-10 le-text-sm lg:le-text-2xl le-font-bold">
            {components.map((component) => (
              <a
                key={component}
                className="le-no-underline"
                href={`/${component}`}
              >
                {splitAndCapitalize(component) + " Example"}
              </a>
            ))}
          </div>
        </div>
        <div className="le-w-[90vw] lg:le-w-[80vw] le-flex le-flex-col le-h-full">
          <header className="le-bg-gray-50 le-flex le-items-center le-justify-center">
            <h1 className="le-text-xl le-font-bold">Header Section - Title</h1>
          </header>

          <div className="le-flex-grow le-overflow-auto">
            <Routes>
              <Route path="*" children={<></>} />
              <Route path="/provider" children={<ProviderExample />} />
              <Route path="/raw_data" children={<RawDataExample />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

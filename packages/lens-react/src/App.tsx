import React from "react";
import { splitAndCapitalize } from "../lib/components/utils/splitAndCapitalize";
import "./App.css";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { makeServer } from "./mocks/mirageServer";
import ProviderExample from "./examples/ProviderExample";
import RawDataExample from "./examples/RawDataExample";
import ProviderExample2 from "./examples/ProviderExample2";
import ViewExample from "./examples/ViewExample";
import SimpleFiltersExample from "./examples/SimpleFiltersExample";
import FilterBuilderExample from "./examples/FilterBuilderExample";
import ENUMExample from "./examples/ENUMExample";
import { cn } from "../lib/components/utils/cn";
import { MoonIcon, SunIcon } from "lucide-react";

function App() {
  React.useEffect(() => {
    makeServer();
    return () => {
      makeServer().shutdown();
    };
  }, []);

  const [mode, setMode] = React.useState("light");
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const components = [
    "raw_data",
    "provider",
    "provider_2",
    "views",
    "simple_filter",
    "filter_builder",
    "enum",
  ];

  return (
    <main className={cn("w-screen h-screen overflow-hidden", mode)}>
      <div className="w-full h-full flex">
        <div className="min-w-[50px] lg:min-w-[200px] w-[10vw] lg:w-[20vw] bg-gray-50 dark:bg-gray-800 flex flex-col gap-y-2 p-4 text-black dark:text-white">
          <div className="flex flex-col gap-y-10 text-sm lg:text-2xl font-bold">
            {components.map((component) => (
              <a
                key={component}
                className="no-underline"
                href={`/${component}`}
              >
                {splitAndCapitalize(component) + " Example"}
              </a>
            ))}
          </div>
        </div>
        <div className="w-[90vw] lg:w-[80vw] flex flex-col h-full">
          <header className="relative bg-gray-50 dark:bg-gray-800 dark:text-white flex items-center justify-center h-14">
            <h1 className="text-xl font-bold">Header Section - Title</h1>
            <div
              className="absolute top-1/2 -translate-y-1/2 right-0 w-8 h-8 flex items-center justify-center cursor-pointer"
              onClick={toggleMode}
            >
              {mode === "dark" ? <SunIcon /> : <MoonIcon />}
            </div>
          </header>

          <div className="flex-grow overflow-auto pt-4 bg-white dark:bg-gray-700">
            <Routes>
              <Route path="*" children={<></>} />
              <Route path="/provider" children={<ProviderExample />} />
              <Route path="/raw_data" children={<RawDataExample />} />
              <Route path="/provider_2" children={<ProviderExample2 />} />
              <Route path="/views" children={<ViewExample />} />
              <Route
                path="/simple_filter"
                children={<SimpleFiltersExample />}
              />
              <Route
                path="/filter_builder"
                children={<FilterBuilderExample />}
              />
              <Route path="/enum" children={<ENUMExample />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { cn } from "../lib/components/utils/cn";
import { splitAndCapitalize } from "../lib/components/utils/splitAndCapitalize";
import "./App.css";
import ENUMExample from "./examples/ENUMExample";
import FilterBuilderExample from "./examples/FilterBuilderExample";
import ProviderExample from "./examples/ProviderExample";
import ProviderExample2 from "./examples/ProviderExample2";
import RawDataExample from "./examples/RawDataExample";
import SimpleFiltersExample from "./examples/SimpleFiltersExample";
import ViewExample from "./examples/ViewExample";
import { makeServer } from "./mocks/mirageServer";

function App() {
  React.useEffect(() => {
    makeServer();
    return () => {
      makeServer().shutdown();
    };
  }, []);

  const setLocalStorage = (key: string, value: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  };

  const getLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  };

  const [mode, setMode] = React.useState(getLocalStorage("theme") || "light");
  const toggleMode = () => {
    if (mode === "dark") {
      setLocalStorage("theme", "light");
    } else {
      setLocalStorage("theme", "dark");
    }
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
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
    <main className={cn("h-screen w-screen overflow-hidden", mode)}>
      <div className="flex h-full w-full">
        <div className="flex w-[100px] min-w-[100px] flex-col gap-y-2 bg-gray-50 p-4 text-black lg:w-[20vw] lg:min-w-[200px] dark:bg-gray-800 dark:text-white">
          <div className="flex flex-col gap-y-10 text-sm font-bold lg:text-2xl">
            {components.map(component => (
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
        <div className="flex h-full w-[90vw] flex-col lg:w-[80vw]">
          <header className="relative flex h-14 items-center justify-center bg-gray-50 dark:bg-gray-800 dark:text-white">
            <h1 className="text-xl font-bold">Header Section - Title</h1>
            <div
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center"
              onClick={toggleMode}
            >
              {mode === "dark" ? <SunIcon /> : <MoonIcon />}
            </div>
          </header>

          <div className="flex-grow overflow-auto bg-white pt-4 dark:bg-gray-700">
            <BrowserRouter>
              <Routes>
                <Route path="*" element={<></>} />
                <Route path="/provider" element={<ProviderExample />} />
                <Route path="/raw_data" element={<RawDataExample />} />
                <Route path="/provider_2" element={<ProviderExample2 />} />
                <Route path="/views" element={<ViewExample />} />
                <Route
                  path="/simple_filter"
                  element={<SimpleFiltersExample />}
                />
                <Route
                  path="/filter_builder"
                  element={<FilterBuilderExample />}
                />
                <Route path="/enum" element={<ENUMExample />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

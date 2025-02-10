import { splitAndCapitalize } from "../lib/components/utils/splitAndCapitalize";
import "./App.css";
import DataTableExample from "./examples/DataTableExample";
import FiltersExample from "./examples/FiltersExample";
import LensExample from "./examples/LensExample";
import { BrowserRouter as Routes, Route } from "react-router-dom";

function App() {
  const components = ["lens", "filters", "table"];

  return (
    <main className="le-w-screen le-h-screen le-overflow-hidden">
      <div className="le-w-full le-h-full le-flex">
        <div className="le-min-w-[50px] lg:le-min-w-[200px] le-w-[10vw] lg:le-w-[20vw] le-bg-gray-50 le-flex le-flex-col le-gap-y-2 le-p-4">
          <div className="le-flex le-flex-col le-gap-y-10 le-text-sm lg:le-text-2xl le-font-bold">
            {components.map((component) => (
              <a
                key={component}
                className="le-no-underline "
                href={`/${component}`}
              >
                {splitAndCapitalize(component)}
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
              <Route path="/lens" children={<LensExample />} />
              <Route path="/filters" children={<FiltersExample />} />
              <Route path="/table" children={<DataTableExample />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

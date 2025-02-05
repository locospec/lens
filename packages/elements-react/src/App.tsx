import "./App.css";
import FiltersExample from "./examples/FiltersExample";
import LensExample from "./examples/LensExample";
import { BrowserRouter as Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="le-w-screen le-h-screen le-overflow-scroll">
      <Routes>
        <Route path="*" children={<></>} />
        <Route path="/lens" children={<LensExample />} />
        <Route path="/filters" children={<FiltersExample />} />
      </Routes>
    </main>
  );
}

export default App;

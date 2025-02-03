import { Theme, ThemePanel } from "@radix-ui/themes";
import "./App.css";
import LensExample from "./examples/LensExample";

function App() {
  return (
    <main className="le-w-screen le-h-screen le-overflow-scroll">
      <Theme appearance="dark">
        <LensExample />
        {/* <ThemePanel /> */}
      </Theme>
    </main>
  );
}

export default App;

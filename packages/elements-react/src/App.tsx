import "./App.css";
import { Theme } from "@radix-ui/themes";
import LensExample from "./examples/LensExample";

function App() {
  return (
    // <Theme accentColor="crimson" appearance="dark">
    <Theme accentColor="crimson">
      <main className="le-w-screen le-h-screen le-overflow-scroll le-py-5">
        <LensExample />
      </main>
    </Theme>
  );
}

export default App;

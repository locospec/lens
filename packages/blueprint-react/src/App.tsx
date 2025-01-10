import { useState } from "react";
import "./tailwind-entry.css";

// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import { Label } from "@locospec/blueprint-react";

function App() {
  const [count, setCount] = useState(0);
  const [inputCustomCountValue, setInputCustomCountValue] = useState("");

  const handleClickCustomCount = () => {
    if (inputCustomCountValue === "") {
      setCount((count) => count + 1);
    } else {
      setCount(Number(inputCustomCountValue));
    }
  };

  return (
    <>
      <div className="card">
        <Label className="bg-yellow-200">My Label...</Label>
      </div>
    </>
  );
}

export default App;

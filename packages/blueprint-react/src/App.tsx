// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import { Label } from "../lib/main";

function App() {
  return (
    <>
      <div className="loco">
        <Label className="bp:bg-red-500">My Label...</Label>
      </div>
    </>
  );
}

export default App;

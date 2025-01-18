// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import { Theme, Text } from "../lib/main";

function App() {
  return (
    <>
      <Theme>
        <Text></Text>
      </Theme>
    </>
  );
}

export default App;

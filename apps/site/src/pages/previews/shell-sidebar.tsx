import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ShellSidebar } from "@locospec/blueprint-react";
// import "@locospec/blueprint-react/styles.css";

export default function Sidebarshell(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return <ShellSidebar>Blueprint Page</ShellSidebar>;
}

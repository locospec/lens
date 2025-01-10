import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="p-10 bg-gray-50 twp">
        <div className="py-12 mx-auto bg-white max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-4">
              <p>Just some content, Tailwind will work here</p>
              <ul className="p-2 list-none bg-blue-200">
                <li>Item 1</li>
                <li>Item 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

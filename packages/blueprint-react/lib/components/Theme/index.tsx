import { Theme as RadixTheme, ThemePanel } from "@radix-ui/themes";

interface ThemeProps {
  children?: React.ReactNode;
}

const Theme: React.FC<ThemeProps> = (props) => {
  return (
    <>
      <div className="loco twp">
        <RadixTheme>
          {props.children}
          <ThemePanel />
        </RadixTheme>
      </div>
    </>
  );
};

export { Theme, RadixTheme };

import { withSchema } from "../hoc/withSchema";
import { Text as RadixText, Skeleton } from "@radix-ui/themes";

interface TextProps {}

const Text: React.FC<TextProps> = () => {
  return (
    <>
      <RadixText>
        <Skeleton>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          felis tellus, efficitur id convallis a, viverra eget libero. Nam magna
          erat, fringilla sed commodo sed, aliquet nec magna. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Pellentesque felis tellus,
          efficitur id convallis a, viverra eget libero. Nam magna erat,
          fringilla sed commodo sed, aliquet nec magna.
        </Skeleton>
      </RadixText>
    </>
  );
};

const SchemaText = withSchema<TextProps>(Text, "text");

export { Text, SchemaText };

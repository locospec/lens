import { Section } from "@radix-ui/themes";
import { cn } from "../../lib/components/utils/cn";
import hyperbola from "../assets/hyperbola_landing_page_video.webm";

export interface SectionWrapperProps {
  children: React.ReactNode;
  height?: string;
  spacing?: string;
  heading?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundVideoUrl?: string;
}

const defaultBackgroundColors =
  "le-bg-blue-300 sm:le-bg-red-300 md:le-bg-yellow-300 lg:le-bg-purple-300";
const defaultSpacing = "le-px-4";

const SectionWrapper = ({
  children,
  height = "le-h-[700px] le-relative",
  spacing = defaultSpacing,
  heading = "",
  backgroundColor = defaultBackgroundColors,
  backgroundImage = "",
  backgroundVideoUrl = "",
}: SectionWrapperProps) => {
  console.log(">>>>> ", backgroundVideoUrl);
  return (
    <>
      {heading && (
        <h2 className="le-text-2xl le-font-bold le-mt-4">{heading}</h2>
      )}
      <Section
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={cn(
          spacing,
          backgroundVideoUrl ? "" : backgroundColor,
          height
        )}
        size="2"
      >
        {backgroundVideoUrl && (
          <video
            className="le-absolute le-top-0 le-h-full le-left-0 le-w-full le-object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={hyperbola} // Use the imported video
          />
        )}
        {children}
      </Section>
    </>
  );
};

export default SectionWrapper;

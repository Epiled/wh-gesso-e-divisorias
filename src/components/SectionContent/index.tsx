import {
  SectionContentHeader,
  SectionContentImage,
  SectionContentStyled,
  SectionContentText,
  SectionContentTitle,
} from "./styles";
import { type SectionHeaderProps } from "../SectionHeader";

interface ServicesPageProps {
  header: SectionHeaderProps;
  image: ImageProps;
  orientation?: "default" | "reverse";
}

interface ImageProps {
  src: string;
  alt?: string;
}

export const SectionContent = (props: ServicesPageProps) => {
  const { header, image, orientation = "default" } = props;

  return (
    <SectionContentStyled>
      <SectionContentHeader $orientation={orientation}>
        <SectionContentTitle text={header.title} />
        {header.text.map((text, i) => {
          return <SectionContentText key={i} text={text} />;
        })}
      </SectionContentHeader>
      <SectionContentImage {...image} $orientation={orientation} />
    </SectionContentStyled>
  );
};

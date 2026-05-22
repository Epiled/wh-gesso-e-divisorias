import { Text } from "../Text";
import { Title, type TitleProps } from "../Title";
import {
  SectionCenterHeader,
  SectionCenterStyled,
  SectionCenterTexts,
  SectionCenterWrapper,
} from "./styles";

export interface SectionContentProps {
  header: TitleProps;
  texts: string[];
  children?: React.ReactElement;
}

export const SectionCenter = (props: SectionContentProps) => {
  const { header, texts, children } = props;

  return (
    <SectionCenterStyled>
      <SectionCenterWrapper>
        <SectionCenterHeader $decoration={header.decoration}>
          <Title
            decoration={header.decoration}
            align="center"
            title={header.title}
          />

          <SectionCenterTexts>
            {texts.map((text) => {
              return <Text key={text} text={text} align="center" />;
            })}
          </SectionCenterTexts>
        </SectionCenterHeader>

        {children}
      </SectionCenterWrapper>
    </SectionCenterStyled>
  );
};

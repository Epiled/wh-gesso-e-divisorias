import type { Direction } from "../../types/Direction";
import { type ButtonProps } from "../Button";
import { Text } from "../Text";
import { Title, type TitleProps } from "../Title";
import {
  Qualification,
  Qualifications,
  QualificationText,
  QualificationTitle,
  SectionContentButton,
  SectionContentButtons,
  SectionContentDivide,
  SectionContentFrame,
  SectionContentImage,
  SectionContentMain,
  SectionContentStyled,
  SectionContentTexts,
  SectionContentWrapper,
} from "./styles";

export interface SectionContentProps {
  header: TitleProps;
  texts: string[];
  image?: string;
  direction?: Direction;
  buttons?: ButtonProps[];
  qualifications?: boolean;
}

export const SectionContent = (props: SectionContentProps) => {
  const {
    header,
    texts,
    image,
    direction,
    buttons,
    qualifications = false,
  } = props;

  return (
    <SectionContentStyled $direction={direction}>
      <SectionContentWrapper $direction={direction}>
        <SectionContentMain>
          <SectionContentDivide $decoration={header.decoration}>
            <Title {...header} />

            <SectionContentTexts>
              {texts.map((text) => {
                return <Text key={text} text={text} />;
              })}
            </SectionContentTexts>
          </SectionContentDivide>

          {qualifications && (
            <Qualifications>
              <Qualification>
                <QualificationTitle>+8</QualificationTitle>
                <QualificationText>Anos de Experiência</QualificationText>
              </Qualification>

              <Qualification>
                <QualificationTitle>500+</QualificationTitle>
                <QualificationText>Projetos Concluidos</QualificationText>
              </Qualification>

              <Qualification>
                <QualificationTitle>100%</QualificationTitle>
                <QualificationText>Compromisso</QualificationText>
              </Qualification>
            </Qualifications>
          )}

          {buttons && (
            <SectionContentButtons>
              {buttons.map((button) => {
                const { text, appearance, onClick } = button;

                return (
                  <SectionContentButton
                    key={text}
                    text={text}
                    appearance={appearance}
                    onClick={onClick}
                  />
                );
              })}
            </SectionContentButtons>
          )}
        </SectionContentMain>

        {image && (
          <SectionContentFrame>
            <SectionContentImage src={image} />
          </SectionContentFrame>
        )}
      </SectionContentWrapper>
    </SectionContentStyled>
  );
};

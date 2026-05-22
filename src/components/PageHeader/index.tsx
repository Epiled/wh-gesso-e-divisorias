import type { DecorationAlign } from "../../types/DecorationAlign";
import { Button, type ButtonProps } from "../Button";
import { BuildIcon } from "../Icons/BuildIcon";
import { FastIcon } from "../Icons/FastIcon";
import { SquadIcon } from "../Icons/SquadIcon";
import {
  PageHeaderButtons,
  PageHeaderContent,
  PageHeaderHero,
  PageHeaderQualification,
  PageHeaderQualifications,
  PageHeaderStyled,
  PageHeaderText,
  PageHeaderTitle,
  PageHeaderWrapper,
} from "./styles";

interface PageHeaderProps {
  breadcrumb?: boolean;
  title: string;
  text: string;
  decoration?: DecorationAlign;
  background: string;
  buttons?: ButtonProps[];
  qualifications?: boolean;
}

export const PageHeader = (props: PageHeaderProps) => {
  const {
    breadcrumb,
    title,
    text,
    decoration,
    background,
    buttons,
    qualifications,
  } = props;

  return (
    <PageHeaderStyled>
      {breadcrumb && ""}
      <PageHeaderWrapper>
        <PageHeaderContent $decoration={decoration}>
          <PageHeaderTitle $decoration={decoration}>{title}</PageHeaderTitle>
          <PageHeaderText text={text} />
        </PageHeaderContent>

        {buttons && (
          <PageHeaderButtons>
            {buttons.map((button) => {
              const { text, appearance, onClick } = button;

              return (
                <Button
                  key={text}
                  text={text}
                  appearance={appearance}
                  onClick={onClick}
                />
              );
            })}
          </PageHeaderButtons>
        )}

        {qualifications && (
          <PageHeaderQualifications>
            <PageHeaderQualification>
              <FastIcon />
              Atendimento rápido
            </PageHeaderQualification>
            <PageHeaderQualification>
              <SquadIcon /> Equipe especializada
            </PageHeaderQualification>
            <PageHeaderQualification>
              <BuildIcon /> Projetos residenciais e comerciais
            </PageHeaderQualification>
          </PageHeaderQualifications>
        )}
      </PageHeaderWrapper>
      <PageHeaderHero src={background} />
    </PageHeaderStyled>
  );
};

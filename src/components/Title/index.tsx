import type { DecorationAlign } from "../../types/DecorationAlign";
import { TitleComplement, TitleStyled } from "./styles";

export interface TitleProps {
  complement?: string;
  title: string;
  decoration?: DecorationAlign;
  align?: DecorationAlign;
  className?: string;
}

export const Title = (props: TitleProps) => {
  const { complement, title, decoration, align, className } = props;

  return (
    <TitleStyled $align={align} $decoration={decoration} className={className}>
      {complement && <TitleComplement>{complement}</TitleComplement>}
      {title}
    </TitleStyled>
  );
};

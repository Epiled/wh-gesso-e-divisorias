import type { DecorationAlign } from "../../types/DecorationAlign";
import { TextStyled } from "./styles";

interface TextProps {
  text: string;
  align?: DecorationAlign;
  className?: string;
}

export const Text = (props: TextProps) => {
  const { text, align, className } = props;

  return (
    <TextStyled $align={align} className={className}>
      {text}
    </TextStyled>
  );
};

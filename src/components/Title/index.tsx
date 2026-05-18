import { TitleStyled } from "./styles";

interface TitleProps {
  text: string;
  className?: string;
}

export const Title = (props: TitleProps) => {
  const { text, className } = props;

  return <TitleStyled className={className}>{text}</TitleStyled>;
};

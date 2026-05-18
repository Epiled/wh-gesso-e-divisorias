import { TextStyled } from "./styles";

interface IText {
  text: string;
  className?: string;
}

export const Text = (props: IText) => {
  const { text, className } = props;

  return <TextStyled className={className}>{text}</TextStyled>;
};

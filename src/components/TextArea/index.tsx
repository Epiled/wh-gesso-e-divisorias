import { TextAreaField, TextAreaStyled } from "./styles";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const TextArea = (props: TextAreaProps) => {
  const { className, ...rest } = props;
  return (
    <TextAreaStyled className={className}>
      <TextAreaField {...rest} />
    </TextAreaStyled>
  );
};

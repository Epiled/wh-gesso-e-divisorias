import { useState, type ChangeEvent } from "react";
import { TextAreaField, TextAreaStyled } from "./styles";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const TextArea = (props: TextAreaProps) => {
  const { className, ...rest } = props;

  const [value, setValue] = useState("");

  return (
    <TextAreaStyled className={className}>
      <TextAreaField
        value={value}
        {...rest}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setValue(e.target.value);
        }}
      />
    </TextAreaStyled>
  );
};

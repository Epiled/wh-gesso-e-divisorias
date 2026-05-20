import { type ChangeEvent } from "react";
import { FieldInput, FieldLabel, FieldStyled } from "./styles";

interface FieldProps {
  text: string;
  value: string;
  placeholder?: string;
  className?: string;
  as?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Field = (props: FieldProps) => {
  const { text, value, placeholder, className, as, onChange } = props;

  return (
    <FieldStyled className={className}>
      <FieldLabel>{text}</FieldLabel>
      <FieldInput
        as={as}
        data-type={as}
        value={value}
        placeholder={placeholder ?? ""}
        onChange={onChange}
      />
    </FieldStyled>
  );
};

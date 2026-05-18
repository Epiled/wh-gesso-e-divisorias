import { useState } from "react";
import { FieldError, FieldInput, FieldLabel, FieldStyled } from "./styles";

interface FieldProps {
  text: string;
  placeholder?: string;
  className?: string;
}

export const Field = (props: FieldProps) => {
  const { text, placeholder, className } = props;

  const [value, setValue] = useState("");

  const [error, setError] = useState(false);

  return (
    <FieldStyled className={className}>
      <FieldLabel>{text}</FieldLabel>
      <FieldInput
        value={value}
        placeholder={placeholder ?? ""}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {error && <FieldError>Error</FieldError>}
    </FieldStyled>
  );
};

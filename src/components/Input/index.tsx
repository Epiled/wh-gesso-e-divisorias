import { useState, type ChangeEvent } from "react";
import { InputField, InputStyled } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = (props: InputProps) => {
  const { ...rest } = props;

  const [value, setValue] = useState("");

  return (
    <InputStyled>
      <InputField
        type={"text"}
        value={value}
        {...rest}
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setValue(e.target.value);
        }}
      />
    </InputStyled>
  );
};

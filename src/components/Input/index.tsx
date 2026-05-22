import { InputField, InputStyled } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = (props: InputProps) => {
  const { ...rest } = props;
  return (
    <InputStyled>
      <InputField {...rest} />
    </InputStyled>
  );
};

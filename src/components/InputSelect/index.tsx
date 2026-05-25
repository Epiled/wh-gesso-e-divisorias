import { useState, type ChangeEvent, type SelectHTMLAttributes } from "react";

import { SelectField, SelectStyled } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export const Select = (props: SelectProps) => {
  const { children, value: controlledValue, onChange, ...rest } = props;

  const [internalValue, setInternalValue] = useState("");

  const isControlled = controlledValue !== undefined;

  const value = isControlled ? controlledValue : internalValue;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }

    onChange?.(e);
  };

  return (
    <SelectStyled>
      <SelectField value={value} onChange={handleChange} {...rest}>
        {children}
      </SelectField>
    </SelectStyled>
  );
};

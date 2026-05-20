import { type ChangeEvent } from "react";
import {
  FieldSelectInput,
  FieldSelectLabel,
  FieldSelectStyled,
  FieldSelectError,
} from "./styles";
import { servicesRoutes } from "../../constants/servicesRoutes";

interface FieldProps {
  text: string;
  value: string;
  placeholder?: string;
  className?: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const FieldSelect = (props: FieldProps) => {
  const { text, value, placeholder, className, error, onChange } = props;

  return (
    <FieldSelectStyled className={className}>
      <FieldSelectLabel>{text}</FieldSelectLabel>

      <FieldSelectInput
        id="service"
        name="service"
        value={value}
        onChange={onChange}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}

        {servicesRoutes.map((service) => {
          const { id, text: serviceText } = service;

          return (
            <option key={id} value={id}>
              {serviceText}
            </option>
          );
        })}
      </FieldSelectInput>

      {error && <FieldSelectError>{error}</FieldSelectError>}
    </FieldSelectStyled>
  );
};

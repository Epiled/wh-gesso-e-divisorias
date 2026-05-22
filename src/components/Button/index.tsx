import React from "react";
import { ButtonStyled } from "./styles";

export type Appearance = "default" | "outline" | "outline-brand" | "neutral";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: Appearance;
  text?: string;
  className?: string;
  children?: React.ReactElement;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const { appearance, text, className, children, onClick, ...rest } = props;
  const baseClass = className ?? "";

  return (
    <ButtonStyled
      $appearance={appearance}
      className={baseClass}
      onClick={onClick}
      {...rest}
    >
      {children && children}
      {text && text}
    </ButtonStyled>
  );
};

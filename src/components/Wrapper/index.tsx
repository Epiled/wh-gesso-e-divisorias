import { WrapperStyled } from "./styles";
import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return <WrapperStyled className={className}>{children}</WrapperStyled>;
};

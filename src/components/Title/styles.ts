import styled from "styled-components";

export const TitleStyled = styled.h2`
  color: var(--color-neutral-white);
  font-size: 3.6rem;
  font-weight: 700;
  font-family: var(--montserrat);
  text-align: left;
  text-rendering: geometricPrecision;
  white-space: pre-line;

  @media screen and (min-width: 1024px) {
    font-size: 6.4rem;
  }
`
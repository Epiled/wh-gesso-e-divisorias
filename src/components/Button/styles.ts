import styled from "styled-components";
import type { Appearance } from ".";

export const ButtonStyled = styled.button<{$appearance?: Appearance}>`
  display: flex;
  border: 0;
  outline: 0;
  gap: 1rem;
  padding: 2rem 4rem;
  border-radius: .5rem;
  font-family: var(--montserrat);
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  transition: all .5s;

  &:hover {
    cursor: pointer;
    transition: all .5s;
  }

  ${({ $appearance }) => {
    let css: string;
    
    if ($appearance === "neutral") {
        css = `
          background: white;
          border: .1rem solid #0D56B1;
          color: #0D56B1;

          &:hover {
            color: white;
            border: .1rem solid white;
            background: transparent;
          }
        `;
    } else if ($appearance === "outline") {
        css = `
          color: white;
          border: .1rem solid white;
          background: transparent;
          font-weight: 400;

          &:hover {
            color: #0D56B1;
            background: white;
          }
        `;
    } else if ($appearance === "outline-brand") {
        css = `
          color: #0D56B1;
          border: .1rem solid #0D56B1;
          background: transparent;

          &:hover {
            color: white;
            border: .1rem solid white;
            background: #0D56B1;
          }
        `;
    } else {
        css = `
          background: #0D56B1;
          color: white;

          &:hover {
            background: #053269;
          }
        `;
    }

    return `
        ${css}
    `;
  }}
`
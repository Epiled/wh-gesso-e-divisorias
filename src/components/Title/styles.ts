import styled from 'styled-components';
import type { DecorationAlign } from '../../types/DecorationAlign';

export const TitleStyled = styled.h2<{ $decoration?: DecorationAlign, $align?: DecorationAlign }>`
  color: #081125;
  font-family: var(--montserrat);
  font-weight: 700;
  font-size: 3.6rem;
  position: relative;
  display: flex;
  flex-direction: column;

  text-align: ${({ $align }) => $align ?? "left"};

  ${({ $decoration }) => {
    if (!$decoration) return "";

    let alignmentCss = "left: 0;";
    
    if ($decoration === "center") {
      alignmentCss = `
        left: 50%;
        transform: translateX(-50%);
      `;
    } else if ($decoration === "right") {
      alignmentCss = "right: 0;";
    }

    return `
      &::after {
        content: "";
        position: absolute;
        width: 6rem;
        height: .5rem;
        background: #3163A9;
        top: calc(100% + 3rem);
        ${alignmentCss}
      }
    `;
  }}
`

export const TitleComplement = styled.span`
  color: #0C46C2;
  font-family: var(--nunita);
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
`

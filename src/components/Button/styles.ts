import styled, { css } from "styled-components";
import type { Appearance, Size } from ".";

export const ButtonStyled = styled.button<{ 
    $appearance?: Appearance, 
    $size?: Size 
  }>`
  display: flex;
  gap: .8rem;
  justify-content: center;
  border-radius: .5rem;
  border: 0;
  outline: 0;
  font-weight: 500;
  font-family: var(--montserrat);
  width: 100%;
  max-width: 25rem;
  transition-property: background-color, color, box-shadow;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: 0 .8rem 1.5rem var(--color-shadow);
    cursor: pointer;
  }

  ${({ $appearance }) => {
    switch($appearance) {
      case 'inverse':
        return css`
          background: var(--color-intermediary);
          color: var(--color-neutral-white);

          &:hover {
            background: var(--color-intermediary-hover);
          }
        `;
      case 'brand':
        return css`
          background: var(--color-primary);
          color: var(--color-neutral-white);

          &:hover {
            background: var(--color-primary-hover);
          }
        `;
      case 'default':
      default:
        return css`
          background: var(--color-neutral-white);
          color: var(--color-text-primary);

          &:hover {
            color: var(--color-brand-primary);
          }
        `;
      }
  }}

  ${({ $size }) => {
    switch($size) {
      case 'small':
        return css`
          font-size: 1.4rem;
          padding: 0.7rem 1.6rem;
        `;
      case 'large':
      default:
        return css`
          font-size: 1.8rem;
          padding: 1.5rem;
        `;
      }
  }}
`
import styled from 'styled-components';
import type { DecorationAlign } from '../../types/DecorationAlign';

export const TextStyled = styled.p<{ $align?: DecorationAlign }>`
  color: #202020;
  font-weight: 500;
  font-size: 2rem;
  font-family: var(--nunita);
  line-height: 3rem;
  text-align: ${({ $align }) => $align ?? "left"};
`
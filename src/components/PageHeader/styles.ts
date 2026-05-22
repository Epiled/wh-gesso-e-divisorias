import styled from 'styled-components';
import { Wrapper } from '../Wrapper';
import type { DecorationAlign } from '../../types/DecorationAlign';
import { Text } from '../Text';

export const PageHeaderStyled = styled.div`
  position: relative;
  background: linear-gradient(90deg, #101D33 30%, #45454500 100%);
  display: flex;
  justify-content: center;
  `

export const PageHeaderWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-top: 15rem;
  padding-bottom: 9rem;
  width: 100%;
`

export const PageHeaderHero = styled.img`
  display: block;
  position: absolute;
  object-fit: cover;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const PageHeaderContent = styled.div<{ $decoration?: DecorationAlign }>`
  display: flex;
  flex-direction: column;
  gap: ${props => (props.$decoration ? '6rem' : '4rem')};
  max-width: 56rem;

`

export const PageHeaderTitle = styled.h1<{ $decoration?: DecorationAlign }>`
  color: white;
  font-size: 3.6rem;
  font-weight: 700;
  font-family: var(--montserrat);
  position: relative;

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

  @media screen and (min-width: 1024px) {
    font-size: 5rem;
  }
`

export const PageHeaderText = styled(Text)`
  color: white;
  font-size: 2rem;

  @media screen and (min-width: 1024px) {
    font-size: 2.4rem;
  }
`

export const PageHeaderButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const PageHeaderQualifications = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  @media screen and (min-width: 1024px) {
    gap: 5rem;
  }
`

export const PageHeaderQualification = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 1.8rem;
  font-family: var(--montserrat);
`
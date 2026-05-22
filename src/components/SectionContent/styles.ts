import styled from 'styled-components';
import { Wrapper } from '../Wrapper';
import type { DecorationAlign } from '../../types/DecorationAlign';
import type { Direction } from '../../types/Direction';
import { Button } from '../Button';

export const SectionContentStyled = styled.section<{ $direction?: Direction }>`
  padding: 7rem 0;
  display: flex;
  justify-content: center;
  background: ${({ $direction }) => { return $direction === "reverse" ? "#F4F6F8" : "white"}};
`

export const SectionContentWrapper = styled(Wrapper)<{ $direction?: Direction }>`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    
    justify-content: ${({ $direction }) => { return $direction === "reverse" ? "flex-end" : "flex-start"}};
    flex-direction: ${({ $direction }) => { return $direction === "reverse" ? "row-reverse" : "row"}};
  }
`

export const SectionContentMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 1;
`

export const SectionContentDivide = styled.div<{ $decoration?: DecorationAlign }>`
  display: flex;
  flex-direction: column;
  max-width: 68rem;
  gap: ${({ $decoration }) => ($decoration ? "6rem" : "1.5rem")};

  @media screen and (min-width: 1024px){
    flex: 1;
  }
`

export const SectionContentTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const SectionContentButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`

export const SectionContentFrame = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
  max-width: 80rem;

  @media screen and (min-width: 1024px){
    flex: 1;
    height: 100%;
  }
`

export const SectionContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const SectionContentButton = styled(Button)`
  font-size: 1.8rem;
  padding: 1.5rem 3rem;
`

export const Qualifications = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
`

export const Qualification = styled.div`
  display: flex;
  flex-direction: column;
`

export const QualificationTitle = styled.div`
  font-size: 3.6rem;
  font-family: var(--nunita);
  font-weight: 900;
  color: #0D56B1;
`

export const QualificationText = styled.div`
  font-size: 2rem;
  font-family: var(--nunita);
  color: #202020;
`
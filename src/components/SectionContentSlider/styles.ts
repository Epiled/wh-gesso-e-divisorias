import styled from "styled-components";
import { Title } from "../Title";
import { Text } from "../Text";

export const SectionContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 5rem 2rem;
  gap: 2rem;
  background: var(--lighter);
  
  @media screen and (min-width: 1024px) {
    padding: 5rem 4rem;
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(12, 1fr);
  }

  .slick-list {
    max-height: 50rem;
  }

  .slick-slider {
    .slick-arrow .slick-preview {
      left: 25px!important;
    }

    .slick-arrow .slick-next {
      right: 25px!important;
    }
  }

  .slick-dots {
    position: relative;
    display: flex!important;
    justify-content: center;
    gap: .5rem;

    * {
      width: 5rem;
      height: 5rem;
    }
  }
`

export const SectionContentHeader = styled.div<{$orientation?: "default" | "reverse"}>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  grid-column: 1 / span 4;

  @media screen and (min-width: 1024px) {
    grid-row: 1;
    grid-column: ${({ $orientation }) => $orientation === 'reverse' ? '5 / span 4' : '1 / span 4'};
  }

  @media screen and (min-width: 1440px) {
    grid-column: ${({ $orientation }) => $orientation === 'reverse' ? '7 / span 6' : '1 / span 6'};
  }
`

export const SectionContentImage = styled.div<{$orientation?: "default" | "reverse"}>`
  width: 100%;
  grid-column: 1 / span 4;
  border-radius: .5rem;

  @media screen and (min-width: 1024px) {
    grid-row: 1;
    grid-column: ${({ $orientation }) => $orientation === 'reverse' ? '1 / span 4' : '5 / span 4'};
  }

  @media screen and (min-width: 1440px) {
    grid-column: ${({ $orientation }) => $orientation === 'reverse' ? '1 / span 6' : '7 / span 6'};
  }
`

export const SectionContentTitle = styled(Title)`
  color: var(--color-primary);
  @media screen and (min-width: 1024px) {
    font-size: 4.8rem;
  }
`

export const SectionContentText = styled(Text)`
  color: var(--color-text-primary);
`

export const SectionThumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const SectionSliderContainer = styled.div`
  width: 100%;
  max-width: 500px;
`

import styled from "styled-components";

export const BannerStyled = styled.section`
  background-size: 100%, cover;
  background-position: center;
  min-height: 70rem;
  padding: 9rem 2rem 2rem 2rem;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(163deg, rgba(16, 42, 71, 0.75) 0%, rgba(25, 83, 148, 0.5) 100%);
    z-index: 1;
  }

  @media screen and (min-width: 1024px) {
    padding: 9rem 4rem 4rem 4rem;
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const BannerWrapper = styled.div`
  display: grid;
  gap: 2rem;
  position: relative;
  z-index: 2;

  grid-column: 1 / span 5;

  @media screen and (min-width: 1024px) {
    grid-column: 1 / span 6;
  }
  

  @media screen and (min-width: 1440px) {
    grid-column: 2 / span 6;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 76rem;
  
  @media screen and (min-width: 1024px) {
    padding: 0;
    max-width: 128rem;
  }
`

export const BannerTitle = styled.h1`
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

export const BannerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const BannerText = styled.p`
  color: var(--color-neutral-white);
  font-size: 1.8rem;
  font-family: var(--montserrat);
  text-align: left;

  @media screen and (min-width: 1024px) {
    font-size: 2.4rem;
  }
`

export const BannerButtons = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`

export const BannerImages = styled.div`
  position: absolute;
  inset: 0;
`

export const BannerBackground = styled.img`
  display: block;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 50%;
  height: 100%;
  transform: translate(-50%, 0);
`
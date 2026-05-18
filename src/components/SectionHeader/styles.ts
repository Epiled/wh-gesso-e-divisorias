import styled from "styled-components";

import Background from "assets/img/banner.png";

export const SectionHeaderStyled = styled.div`
  background-image: 
    linear-gradient(90deg,rgba(16, 42, 71, 1) 25%, rgba(16, 42, 71, 0.9) 60%, rgba(39, 102, 173, 0.75) 100%), 
    url(${Background});
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  height: 34rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 2rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
    padding: 4rem;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const SectionHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 1 / span 4;

  @media screen and (min-width: 1024px) {
    grid-column: 1 / span 5;
  }
`
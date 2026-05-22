import styled from "styled-components";

export const ServicesList = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));

  @media screen and (min-width: 1024px) {
    gap: 3rem;
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

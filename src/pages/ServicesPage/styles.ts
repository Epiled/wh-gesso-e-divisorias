import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background: var(--lighter);
  padding: 5rem 2rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5rem 4rem;
    gap: 2rem;
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 5rem 4rem;
    gap: 2rem;
  }
`
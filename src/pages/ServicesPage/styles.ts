import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background: var(--lighter);
  padding: 5rem 2rem;

  @media screen and (min-width: 1024px) {
    padding: 5rem 4rem;
    gap: 2rem;
  }
`
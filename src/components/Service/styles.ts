import styled from "styled-components";

export const ServiceStyled = styled.div<{$image: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 36rem;
  width: 100%;
  height: 20rem;
  background-image: 
      linear-gradient(90deg, rgba(16, 42, 71, .5) 0%, rgba(25, 83, 148, .5) 100%),
      url(${({ $image }) => $image});
  background-position: center;
  background-size: cover;
  border-radius: .5rem;

  @media screen and (min-width: 1024px) {
    max-width: 46rem;
    height: 30rem;
  }
`

export const ServiceText = styled.div`
   font-family: var(--montserrat);
   font-size: 3.2rem;
   font-weight: 500;
   color: var(--color-text-alternative);
   text-transform: uppercase;

   @media screen and (min-width: 1024px) {
    font-size: 4rem;
   }
`


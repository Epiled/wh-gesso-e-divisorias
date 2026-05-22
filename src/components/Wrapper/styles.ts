import styled from 'styled-components';

export const WrapperStyled = styled.div`
  padding: 0 2rem;


  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  } 

  @media screen and (min-width: 1024px) {
    padding: 0 6rem;
  } 

  @media screen and (min-width: 1720px) {
    max-width: 160rem;
    padding: 0;
  } 
`
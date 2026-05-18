import styled from "styled-components";
import { Form } from "../../components/Form";

export const ContactPageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5rem;
  padding: 5rem 2rem;
  background: var(--lighter);
  
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
    padding: 5rem 4rem;
    column-gap: 2rem;
    align-items: anchor-center;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const ContactPageForm = styled(Form)`
  grid-column: 1 / span 4;
  
  @media screen and (min-width: 1024px) {
    grid-column: 5 / span 4;
  }

  @media screen and (min-width: 1440px) {
    grid-column: 7 / span 5;
  }
`
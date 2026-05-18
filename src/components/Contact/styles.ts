import styled from "styled-components";

import { Title } from "../Title";
import { Form } from "../Form";

import Background from "assets/img/banner.png";

export const ContactStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  row-gap: 5rem;
  background-image: 
  linear-gradient(163deg, rgba(16, 42, 71, 0.75) 0%, rgba(25, 83, 148, 0.5) 100%), 
  url(${Background});
  background-position: center;
  background-size: cover;
  padding: 10rem 2rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 2rem;
    padding: 10rem 4rem;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const ContactContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  grid-column: 1 / span 4;

  @media screen and (min-width: 1440px) {
    grid-column: 2 / span 5;
  }
`
export const ContactHeader = styled(ContactContents)`
  gap: 2rem;
`

export const ContactFooter = styled(ContactContents)`
  gap: 2rem;
`

export const ContactSubtitle = styled(Title)`
  font-size: 2rem;
  font-weight: 700;

  @media screen and (min-width: 1024px) {
    font-size: 2.4rem;
  }
`

export const ContactTextBlock = styled.div`
  display: flex;
  gap: 1rem;
`

export const ContactForm = styled(Form)`
  grid-column: 1 / span 4;

  @media screen and (min-width: 1024px) {
    grid-column: 5 / span 5;
  }

  @media screen and (min-width: 1440px) {
    grid-column: 8 / span 4;
  }
`

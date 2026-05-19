import styled from "styled-components";
import { NavLink } from "react-router";
import { Text } from "../Text";
import { TextStyled } from "../Text/styles";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 5rem 2rem;
  background: var(--lighter);

  @media screen and (min-width: 1024px) {
    padding: 5rem 4rem;
  }
`

export const FooterLogo = styled.img`
  display: flex;
  align-self: center;
  width: 21rem;
  height: 21rem;
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 5rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
    column-gap: 2rem;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const FooterColumn = styled.div`
  grid-column: 1 / span 4;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &:where(:nth-child(1)) {
    grid-column: 1 / span 2;
  }

  &:where(:nth-child(2)) {
    grid-column: 3 / span 2;
  }

  @media screen and (min-width: 1024px) {
    &:where(:nth-child(3)) {
      grid-column: 5 / span 4;
    }

    &:where(:nth-child(4)) {
      grid-column: 5 / span 4;
    }
  }

  @media screen and (min-width: 1440px) {
    &:where(:nth-child(4)) {
      grid-column: 9 / span 4;
    }
  }
`

export const FooterTitle = styled.h3`
  font-size: 2.4rem;
  font-family: var(--montserrat);
  color: var(--color-intermediary);
`

export const FooterText = styled(Text)`
  color: var(--color-text-primary);
`

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FooterLink = styled(TextStyled).attrs({ as: NavLink })`
  color: var(--color-text-primary);
  text-decoration: none;
`

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FooterTextBlock = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--color-intermediary);
`

export const FooterMap = styled.iframe`
  width: 100%;
  height: 25rem;
  border-radius: .5rem;
  border: .1rem solid var(--color-primary-dark);
`

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  gap: .5rem;
  border-top: .1rem solid var(--color-primary);
`

export const FooterCopyright = styled.p`
  color: var(--color-primary);
  font-size: 1.6rem;
  text-align: center;
  font-family: var(--nunita);
  font-weight: 500;

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`

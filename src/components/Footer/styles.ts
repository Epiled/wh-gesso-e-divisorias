import styled from "styled-components"
import { Wrapper } from "../Wrapper"
import { Text } from "../Text"
import { NavLink } from "react-router"

export const FooterStyled = styled.footer`
  background: #051B36;
  `
export const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  background: #051B36;
`

export const FooterBottom = styled.div`
  padding: 2rem 0;
  background: #03152B;
`

export const FooterWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  flex: 1;

  container-type: inline-size;
  container-name: footer;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: auto;
  max-width: 30rem;

  @container footer (min-width: 1400px) {
    flex: 1;
  }
`;

export const FooterColumnAlt = styled(FooterColumn)`
  gap: 0;
  max-width: 20rem;
`

export const FooterLogo = styled.img`
`

export const FooterTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: var(--montserrat);
`

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const FooterListAlt = styled.ul`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-auto-flow: column;
  gap: .5rem 5rem; 
  justify-content: start;
`

export const FooterListServices = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
`

export const FooterItem = styled.li.attrs({ as: NavLink})`
  color: white;
  font-size: 1.4rem;
  font-family: var(--nunita);
  text-decoration: none;
  width: 100%;

  &:visited {
    color: white;
  }
`

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem 1.5rem;
`

export const FooterText = styled(Text)`
  font-size: 1.6rem;
  font-weight: 400;
  color: white;
  line-height: normal;
`

export const FooterTextAlt = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  font-family: var(--nunita);
  color: white;
  line-height: normal;
`

export const FooterCopy = styled(Text)`
  font-size: 1.6rem;
  font-weight: 400;
  color: white;
  text-align: center;
`

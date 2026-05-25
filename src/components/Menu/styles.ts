import styled from 'styled-components';
import { Wrapper } from '../Wrapper';
import { NavLink } from 'react-router';
import { Button } from '../Button';

export const MenuStyled = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 15rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`

export const MenuWrapper = styled(Wrapper)`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const MenuLogo = styled.img`
  width: 15rem;
  height: 100%;
`

export const MenuContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`

export const MenuList = styled.ul`
  display: flex;
  gap: 5rem;
`

export const MenuItem = styled.li.attrs({ as: NavLink })`
  font-weight: 600;
  font-size: 2rem;
  font-family: var(--montserrat);
  position: relative;
  text-decoration: none;

  &:link {
    color: white;
  }

  &:visited {
    color: white;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: white;
  }

  &:where([data-state="active"]) {
    &::after {
        content: "";
        background: #3163A9;
        position: absolute;
        top: calc(100% + 1rem);
        left: 0;
        width: 100%;
        height: .5rem;
      }
    }
`

export const MenuButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export const MenuButton = styled(Button)`
  height: 6rem;
  padding: 2rem 4rem;
  font-size: 1.8rem;
`

export const MenuButtonWhatsApp = styled(Button).attrs({ as: "a" })`
  background: #17E84D;
  padding: 1.2rem;
  width: 6rem;
  height: 6rem;
  border-radius: .5rem;

  &:hover {
    background: #0a9e31;
  }
`
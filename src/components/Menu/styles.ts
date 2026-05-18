import styled from "styled-components";
import { Button } from "../Button";
import { CloseIcon } from "../Icons/CloseIcon";
import { NavLink } from "react-router";

export const MenuStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 9rem;
  z-index: 5;
  background: var(--lighter);

  @media screen and (min-width: 1024px) {
    padding: 0 4rem;
  }
`

export const MenuOverlay = styled.div`
  position: fixed;
  top: 9rem;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`

export const MenuLogo = styled(NavLink)``

export const MenuList = styled.div<{$active: boolean}>`
  position: fixed;
  left: ${({ $active }) => $active ? "0" : "-33rem"};;
  top: 9rem;
  bottom: 0;
  width: 33rem;
  height: calc(100vh - 9rem);
  background: var(--lighter);
  display: flex;
  flex-direction: column;
  transition-property: left;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
  z-index: 4;
  
  @media screen and (min-width: 1024px) {
    position: static;
    gap: 2rem;
    width: auto;
    height: auto;
    position: static;
    background: transparent;
    border-radius: 0;
  }
`

export const MenuListInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding: 0;
    flex-direction: row;
    gap: 5rem;
  }
`

export const MenuLink = styled(NavLink)<{ $padding?: string, $background?: string }>`
  display: flex;
  color: var(--color-neutral-white);
  font-weight: 600;
  font-size: 2rem;
  font-family: var(--montserrat);
  min-height: 6rem;
  padding: ${props => props.$padding ?? "2rem"};
  background-color: ${props => props.$background ?? 'var(--color-primary)'};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  
  &:where([data-state="active"]) {
    color: var(--color-neutral-white);
  }
  
  @media screen and (min-width: 1024px) {
    color: var(--color-primary);
    background: transparent;
    align-items: center;
    gap: .5rem;
    padding: ${props => props.$padding ?? "0"};
    font-size: 2.4rem;
    position: relative;

    &:where([data-show="mobile-only"]) {
      display: none;
    }

    &:where([data-state="active"]) {
      border-radius: 0;
    }
  }
`

export const MenuLinkWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const MenuButtonToggle = styled(Button)`
  display: block;
  background: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  width: auto;

  &:hover {
    box-shadow: none;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const MenuCloseIcon = styled(CloseIcon)`
  color: var(--color-icon);
`

export const MenuServices = styled.div`
  position: relative;

  @media screen and (min-width: 1024px) {
    position: absolute;
    width: 25rem;
    top: 100%;
    left: 0;
    z-index: 2;
    background: var(--lighter);
    border-radius: .5rem;
    border: .1rem solid var(--color-primary);
  }
  `

export const MenuServiceLink = styled(MenuLink)`
  background: var(--color-intermediary);
  padding: 0 2rem;
  height: 4rem;
  font-size: 1.8rem;
  border-bottom: .1rem solid #ffffff40;
  align-items: center;

  &:last-of-type {
    border: 0;
  }

  @media screen and (min-width: 1024px) {
    border-bottom: .1rem solid gray;
    background: var(--lighter);
    border-bottom: .1rem solid var(--color-primary);

    &:first-of-type {
      border-radius: .5rem .5rem 0 0;
    }

    &:last-of-type {
      border-radius: 0 0 .5rem .5rem;
    }
  }
`

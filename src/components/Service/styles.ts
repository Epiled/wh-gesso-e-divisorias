import { NavLink } from 'react-router';
import styled from 'styled-components'; 

export const ServiceStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  overflow: hidden;
  background: white;
  max-width: 38.5rem;
  box-shadow: 0 .5rem .5rem 0 rgba(0, 0, 0, .25);
`

export const ServiceImage = styled.img`
  width: 100%;
  max-height: 23rem;
  object-fit: cover;
`

export const ServiceContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
`

export const ServiceTitle = styled.h3`
  color: #081B38;
  font-size: 2.2rem;
  line-height: 3rem;
  font-weight: bold;
  font-family: var(--montserrat);
`

export const ServiceText = styled.p`
  color: #202020;
  font-size: 1.4rem;
  font-family: var(--montserrat);
`

export const ServiceLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: #0D56B1;
  font-size: 1.8rem;
  line-height: 3rem;
  font-weight: bold;
  font-family: var(--montserrat);
  margin-top: auto;
  text-decoration: none;
`




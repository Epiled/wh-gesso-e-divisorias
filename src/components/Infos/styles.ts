import styled from "styled-components";
import { Title } from "../Title";
import { Text } from "../Text";

export const InfosStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  background: var(--lighter);
  grid-column: 1 / span 4;
`

export const InfosBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const InfosSubtitle = styled(Title)`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-intermediary);
  font-size: 2.4rem;

  @media screen and (min-width: 1024px) {
    font-size: 3.2rem;
  }
`

export const InfosTextBlock = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--color-intermediary);
`

export const InfosText = styled(Text)`
  color: var(--color-text-primary);
`

export const InfosMap = styled.iframe`
  width: 100%;
  height: 25rem;
  border-radius: .5rem;
  border: .1rem solid var(--color-primary-dark);
`

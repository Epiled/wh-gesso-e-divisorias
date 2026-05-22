import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import { Title } from "../Title";
import { Text } from "../Text";

export const CallToActionStyled = styled.div`
  background-color: #0D56B1;
  padding-top: 4rem;
  padding-bottom: 4rem;
`

export const CallToActionWrapper = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  width: 100%;
  justify-self: center;
`

export const CallToActionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 75rem;
`

export const CallToActionTitle = styled(Title)`
  color: white;
`

export const CallToActionText = styled(Text)`
  color: white;
`

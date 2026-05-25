import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import { Text } from "../Text";
import { Title } from "../Title";
import { Button } from "../Button";

export const MapStyled = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  width: 100%;
  padding-bottom: 7rem;
`

export const MapWrapper = styled(Wrapper)`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const MapBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: white;

  @media screen and (min-width: 1400px) {
    position: absolute;
    top: 0;
    right: 10rem;
    bottom: 0;
    max-width: 35rem;
    padding: 3rem;
  }

  @media screen and (min-width: 1720px) {
    right: 3rem;
  }
`

export const MapContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`

export const MapTitle = styled(Title)`
  @media screen and (min-width: 1400px) {
    font-size: 2.4rem;
  }
`

export const MapText = styled(Text)`
  @media screen and (min-width: 1400px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`

export const MapButton = styled(Button)`
  @media screen and (min-width: 1400px) {
    font-size: 1.4rem;
    padding: 1rem 4.5rem;
    align-items: flex-start;
  }
`

export const MapIframe = styled.iframe`
  width: 100%;
  height: 25rem;
  border-radius: .5rem;
  border: .1rem solid #102A47;

  @media screen and (min-width: 1024px) {
    height: 30rem;
  }
`
import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import { Button } from "../Button";
import { TextArea } from "../TextArea";
import { SectionContentDivide } from "../SectionContent/styles";

export const ContactFormStyled = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  padding: 7rem 0;
`

export const ContactFormWrapper = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  row-gap: 3rem;
  column-gap: 6rem;
  width: 100%;
  align-items: flex-start;

  @media screen and (min-width: 1024px){
    row-gap: 6rem;
    column-gap: 12rem;
  };
`

export const ContactFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  max-width: 39rem;
`

export const ContactFormDivide = styled(SectionContentDivide)`
  @media screen and (min-width: 1024px){
    flex: none;
  };
`

export const ContactFormList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ContactFormItem = styled.li`
  color: #202020;
  display: flex;
  gap: 1.5rem;
  font-size: 1.8rem;
  font-family: var(--nunita);
`

export const ContactFormGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
  align-content: start;
  width: 100%;
  
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const ContactTextArea = styled(TextArea)`
  grid-column: 1 / span 2;
  min-height: 15rem;
`

export const ContactFormButton = styled(Button)`
  grid-column: 1 / span 2;
`
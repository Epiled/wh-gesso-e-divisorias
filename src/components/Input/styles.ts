import styled from "styled-components";

export const InputStyled = styled.div`
`

export const InputField = styled.input`
  font-family: var(--nunita);
  font-size: 1.8rem;
  font-weight: 600;
  background: white;
  border-radius: .5rem;
  border: .1rem solid #CCCCCC;
  color: #202020;
  padding: 1.7rem 2rem;
  width: 100%;
  
  &::placeholder {
    font-family: var(--nunita);
    color: #888888;
    font-weight: 400;
  }
`
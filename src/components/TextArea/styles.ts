import styled from "styled-components";

export const TextAreaStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TextAreaField = styled.textarea`
  font-family: var(--nunita);
  font-size: 1.8rem;
  font-weight: 600;
  padding: 1.7rem 2rem;
  background: white;
  border-radius: .5rem;
  border: .1rem solid #CCCCCC;
  width: 100%;
  height: 100%;
  resize: vertical;
  flex: 1;

  &::placeholder {
    font-family: var(--nunita);
    color: #888888;
  }
`
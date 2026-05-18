import styled from "styled-components";

export const FieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const FieldLabel = styled.label`
  font-weight: 600;
  font-size: 1.8rem;
  font-family: var(--montserrat);
`

export const FieldInput = styled.input`
  background: var(--color-neutral-white);
  color: var(--color-text-primary);
  border: 0;
  outline: 0;
  height: 4rem;
  border-radius: .5rem;
  padding: 0 1rem;
  font-size: 1.6rem;
`

export const FieldError = styled.span`
`


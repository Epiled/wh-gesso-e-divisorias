import styled from "styled-components";

export const FieldSelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const FieldSelectLabel = styled.label`
  font-weight: 600;
  font-size: 1.8rem;
  font-family: var(--montserrat);
`;

export const FieldSelectInput = styled.select`
  background: var(--color-neutral-white);
  color: var(--color-text-primary);
  border: 0;
  outline: 0;
  height: 4rem;
  border-radius: .5rem;
  padding: 1rem;
  font-size: 1.6rem;
  cursor: pointer;

  &:invalid, option[disabled] {
    color: var(--color-text-muted, #aaa);
  }
`;

export const FieldSelectError = styled.span`
  color: var(--color-error, #ff4d4f);
  font-size: 1.4rem;
`;
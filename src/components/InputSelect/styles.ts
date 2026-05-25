import styled from "styled-components";

export const SelectStyled = styled.div``;

export const SelectField = styled.select`
  font-family: var(--nunita);
  font-size: 1.8rem;
  font-weight: 600;
  background: white;
  border-radius: 0.5rem;
  border: 0.1rem solid #cccccc;
  color: #202020;
  padding: 1.7rem 2rem;
  width: 100%;
  appearance: none;
  cursor: pointer;

  &:invalid {
    color: #888888;
    font-weight: 400;
  }

  option {
    color: #202020;
  }
`;
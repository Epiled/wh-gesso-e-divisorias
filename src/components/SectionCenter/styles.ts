import styled from "styled-components";
import { Wrapper } from "../../components/Wrapper";
import type { DecorationAlign } from "../../types/DecorationAlign";

export const SectionCenterStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7rem 0;
  background: white;
`;
export const SectionCenterWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  align-self: center;
`;

export const SectionCenterHeader = styled.div<{ $decoration?: DecorationAlign }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $decoration }) => ($decoration ? "6rem" : "1.5rem")};
`;

export const SectionCenterTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

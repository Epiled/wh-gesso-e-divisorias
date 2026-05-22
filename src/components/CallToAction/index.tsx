import { useNavigate } from "react-router";
import { Button } from "../Button";
import {
  CallToActionContent,
  CallToActionStyled,
  CallToActionText,
  CallToActionTitle,
  CallToActionWrapper,
} from "./styles";

export const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <CallToActionStyled>
      <CallToActionWrapper>
        <CallToActionContent>
          <CallToActionTitle title="Transforme seu ambiente com soluções modernas em gesso e divisórias." />
          <CallToActionText text="Fale com nossa equipe e solicite seu orçamento sem compromisso." />
        </CallToActionContent>
        <Button
          appearance={"neutral"}
          text="Solicitar Orçamento"
          onClick={() => {
            void navigate("/contato");
          }}
        />
      </CallToActionWrapper>
    </CallToActionStyled>
  );
};

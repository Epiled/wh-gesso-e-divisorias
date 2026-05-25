import { ChockIcon } from "../Icons/ChockIcon";
import { Input } from "../Input";
import { SectionContentTexts } from "../SectionContent/styles";
import { Text } from "../Text";
import { Title } from "../Title";
import {
  ContactFormButton,
  ContactFormContent,
  ContactFormDivide,
  ContactFormGrid,
  ContactFormItem,
  ContactFormList,
  ContactFormStyled,
  ContactFormWrapper,
  ContactTextArea,
} from "./styles";

export const ContactForm = () => {
  return (
    <ContactFormStyled>
      <ContactFormWrapper>
        <ContactFormContent>
          <ContactFormDivide $decoration={"left"}>
            <Title title="Fale Conosco" decoration="left" />

            <SectionContentTexts>
              <Text
                text={
                  "Preencha o formulário ao lado e solicite seu orçamento sem compromisso."
                }
              />
            </SectionContentTexts>
          </ContactFormDivide>

          <ContactFormList>
            <ContactFormItem>
              <ChockIcon /> Resposta rápida
            </ContactFormItem>
            <ContactFormItem>
              <ChockIcon /> Orçamento personalizado
            </ContactFormItem>
            <ContactFormItem>
              <ChockIcon /> Soluções completas para seu projeto
            </ContactFormItem>
          </ContactFormList>
        </ContactFormContent>

        <ContactFormGrid>
          <Input placeholder="Seu nome" />
          <Input placeholder="Seu e-mail" />

          <Input placeholder="Seu telefone / WhatsApp" />
          <Input placeholder="Selecione o serviço" />

          <ContactTextArea placeholder="Descreva seu projeto ou necessidade" />

          <ContactFormButton
            appearance={"default"}
            text="Enviar Solicitação"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </ContactFormGrid>
      </ContactFormWrapper>
    </ContactFormStyled>
  );
};

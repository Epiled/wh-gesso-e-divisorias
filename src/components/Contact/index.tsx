import {
  ContactContents,
  ContactFooter,
  ContactForm,
  ContactHeader,
  ContactStyled,
  ContactSubtitle,
  ContactTextBlock,
} from "./styles";
import { Title } from "../Title";
import { Text } from "../Text";
import { ClockIcon } from "../Icons/ClockIcon";

export const Contact = () => {
  return (
    <ContactStyled>
      <ContactContents>
        <ContactHeader>
          <Title text="Fale Conosco" />
          <Text text="Preencha o formulário ao lado e solicte seu orçamento sem compromisso." />
        </ContactHeader>

        <ContactFooter>
          <ContactSubtitle text="Horário de funcionamento:" />
          <ContactTextBlock>
            <ClockIcon />
            <Text text="Segunda a sexta: 07h às 17h" />
          </ContactTextBlock>
          <ContactTextBlock>
            <ClockIcon />
            <Text text="Sábados, Domingos e Feriados: Fechado" />
          </ContactTextBlock>
        </ContactFooter>
      </ContactContents>

      <ContactForm />
    </ContactStyled>
  );
};

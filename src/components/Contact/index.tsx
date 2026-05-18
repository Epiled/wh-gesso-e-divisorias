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
          <Title text="Lorem Impsum" />
          <Text text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </ContactHeader>

        <ContactFooter>
          <ContactSubtitle text="Horário de funcionamento:" />
          <ContactTextBlock>
            <ClockIcon />
            <Text text="Segunda a quinta: 08h às 18h" />
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

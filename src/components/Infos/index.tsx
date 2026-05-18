import { ClockIcon } from "../Icons/ClockIcon";
import { EmailIcon } from "../Icons/EmailIcon";
import { MapIcon } from "../Icons/MapIcon";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { WhatsappIcon } from "../Icons/WhatsappIcon";
import {
  InfosBlock,
  InfosMap,
  InfosStyled,
  InfosSubtitle,
  InfosText,
  InfosTextBlock,
} from "./styles";

export const Infos = () => {
  return (
    <InfosStyled>
      <InfosBlock>
        <InfosSubtitle text="Contatos:" />

        <InfosTextBlock>
          <WhatsappIcon />
          <InfosText text="(11) 9 1234-5679" />
        </InfosTextBlock>
        <InfosTextBlock>
          <PhoneIcon />
          <InfosText text="(11) 1234-5678" />
        </InfosTextBlock>
        <InfosTextBlock>
          <EmailIcon />
          <InfosText text="contato@whgessosedivisorias.com.br" />
        </InfosTextBlock>
      </InfosBlock>

      <InfosBlock>
        <InfosSubtitle text="Horário de funcionamento:" />

        <InfosTextBlock>
          <ClockIcon />
          <InfosText text="Segunda a quinta: 08h às 18h" />
        </InfosTextBlock>
        <InfosTextBlock>
          <ClockIcon />
          <InfosText text="Sábados, Domingos e Feriados: Fechado" />
        </InfosTextBlock>
      </InfosBlock>

      <InfosBlock>
        <InfosSubtitle text="Localização:" />

        <InfosTextBlock>
          <MapIcon />
          <InfosText text="contato@whgessosedivisorias.com.br" />
        </InfosTextBlock>
        <InfosMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29278.61044650471!2d-46.55065212262471!3d-23.466729047328005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef55c7c86048d%3A0xb46307dc4ad8b735!2sCentro%2C%20Guarulhos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1778993304952!5m2!1spt-BR!2sbr"
          loading="lazy"
        />
      </InfosBlock>
    </InfosStyled>
  );
};

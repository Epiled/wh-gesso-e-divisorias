import "./styles";
import {
  FooterBottom,
  FooterColumn,
  FooterContacts,
  FooterCopyright,
  FooterGrid,
  FooterLink,
  FooterList,
  FooterLogo,
  FooterMap,
  FooterStyled,
  FooterText,
  FooterTextBlock,
  FooterTitle,
} from "./styles";
import { EmailIcon } from "../Icons/EmailIcon";
import { MapIcon } from "../Icons/MapIcon";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { WhatsappIcon } from "../Icons/WhatsappIcon";
import { servicesRoutes } from "../../constants/servicesRoutes";

import LogoImage from "assets/img/logo-no-background.png";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterLogo src={LogoImage} alt="" />
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>Links</FooterTitle>
          <FooterList>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/sobre">Sobre</FooterLink>
            <FooterLink to="/servicos">Serviços</FooterLink>
            <FooterLink to="/contato">Contato</FooterLink>
          </FooterList>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Serviços</FooterTitle>
          <FooterList>
            {servicesRoutes.map((service) => {
              const { id, text, route } = service;

              return (
                <FooterLink key={id} to={`/servicos/${route}`}>
                  {text}
                </FooterLink>
              );
            })}
          </FooterList>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Contatos</FooterTitle>
          <FooterContacts>
            <FooterTextBlock>
              <WhatsappIcon />
              <FooterText text="(11) 9 1234-5679" />
            </FooterTextBlock>
            <FooterTextBlock>
              <PhoneIcon />
              <FooterText text="(11) 1234-5678" />
            </FooterTextBlock>
            <FooterTextBlock>
              <EmailIcon />
              <FooterText text="whgessoedivisorias@gmail.com" />
            </FooterTextBlock>
          </FooterContacts>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Localização</FooterTitle>
          <FooterTextBlock>
            <MapIcon />
            <FooterText text="whgessoedivisorias@gmail.com" />
          </FooterTextBlock>
          <FooterMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29278.61044650471!2d-46.55065212262471!3d-23.466729047328005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef55c7c86048d%3A0xb46307dc4ad8b735!2sCentro%2C%20Guarulhos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1778993304952!5m2!1spt-BR!2sbr"
            loading="lazy"
          />
        </FooterColumn>
      </FooterGrid>
      <FooterBottom>
        <FooterCopyright>
          {"© 2026 WG Gesso e Divisoria. Todos os direitos reservados."}
        </FooterCopyright>
      </FooterBottom>
    </FooterStyled>
  );
};

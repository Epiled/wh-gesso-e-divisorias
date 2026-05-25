import { servicesRoutes } from "../../constants/servicesRoutes";
import {
  FooterBottom,
  FooterColumn,
  FooterColumnAlt,
  FooterContacts,
  FooterCopy,
  FooterItem,
  FooterList,
  FooterListAlt,
  FooterLogo,
  FooterStyled,
  FooterText,
  FooterTextAlt,
  FooterTitle,
  FooterTop,
  FooterWrapper,
} from "./styles";

import Logo from "assets/img/logo-small-no-back.png";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterTop>
        <FooterWrapper>
          <FooterColumnAlt>
            <FooterLogo src={Logo} />
            <FooterText text="Soluções completas em gesso e divisórias para ambientes residenciais e corporativos." />
          </FooterColumnAlt>
          <FooterColumn>
            <FooterTitle>Navegação</FooterTitle>
            <FooterList>
              <FooterItem to="/">Home</FooterItem>
              <FooterItem to="/quem-somos">Quem Somos</FooterItem>
              <FooterItem to="/servicos">Serviços</FooterItem>
              <FooterItem to="/contato">Contato</FooterItem>
            </FooterList>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Serviços</FooterTitle>
            <FooterListAlt>
              {servicesRoutes.map((service) => {
                const { id, title, link } = service;

                return (
                  <FooterItem key={id} to={`/servicos/${link}`}>
                    {title}
                  </FooterItem>
                );
              })}
            </FooterListAlt>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Contato</FooterTitle>
            <FooterContacts>
              <FooterTextAlt>(11) 9 8243-6913</FooterTextAlt>
              <FooterTextAlt>whgessoedivisorias@gmail.com</FooterTextAlt>
              <FooterTextAlt>Guarulhos - SP</FooterTextAlt>
              <FooterTextAlt>Segunda a Sexta: 07h às 17h</FooterTextAlt>
              <FooterTextAlt>
                Sábados, Domingos e Feriados: Fechado
              </FooterTextAlt>
            </FooterContacts>
          </FooterColumn>
        </FooterWrapper>
      </FooterTop>
      <FooterBottom>
        <FooterCopy text="© 2026 WG Gesso e Divisória. Todos os direitos reservados. / CNPJ: 65.976.267/0001-64"></FooterCopy>
      </FooterBottom>
    </FooterStyled>
  );
};

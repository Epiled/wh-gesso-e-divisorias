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
            <FooterText text="Soluções completas em gesso e divissorias para ambientes  residencias e corporativos." />
          </FooterColumnAlt>
          <FooterColumn>
            <FooterTitle>Navegação</FooterTitle>
            <FooterList>
              <FooterItem>Home</FooterItem>
              <FooterItem>Quem Somos</FooterItem>
              <FooterItem>Serviços</FooterItem>
              <FooterItem>Contato</FooterItem>
            </FooterList>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Serviços</FooterTitle>
            <FooterListAlt>
              <FooterItem>Drywall</FooterItem>
              <FooterItem>Divisória Eucatex</FooterItem>
              <FooterItem>Forro de Gesso</FooterItem>
              <FooterItem>Forro de PVC</FooterItem>
              <FooterItem>Forro Modular</FooterItem>
              <FooterItem>Sanca</FooterItem>
            </FooterListAlt>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Contato</FooterTitle>
            <FooterContacts>
              <FooterTextAlt>(11) 9999-9999</FooterTextAlt>
              <FooterTextAlt>(11) 9 9999-9999</FooterTextAlt>
              <FooterTextAlt>whgessoedivisorias@gmail.com</FooterTextAlt>
              <FooterTextAlt>Guarulhos - SP</FooterTextAlt>
              <FooterTextAlt>Segunda a Sexta: 08h às 18h</FooterTextAlt>
            </FooterContacts>
          </FooterColumn>
        </FooterWrapper>
      </FooterTop>
      <FooterBottom>
        <FooterCopy text="© 2026 WG Gesso e Divisoria. Todos os direitos reservados. / CNPJ: 65.976.267/0001-64"></FooterCopy>
      </FooterBottom>
    </FooterStyled>
  );
};

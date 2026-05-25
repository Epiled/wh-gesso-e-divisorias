import { useNavigate } from "react-router";
import { WhatsAppIcon } from "../Icons/WhatsAppIcon";
import {
  MenuButton,
  MenuButtons,
  MenuButtonWhatsApp,
  MenuContent,
  MenuItem,
  MenuList,
  MenuLogo,
  MenuStyled,
  MenuWrapper,
} from "./styles";

import LogoImage from "assets/img/logo-small-no-back.png";

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <MenuStyled>
      <MenuWrapper>
        <MenuLogo src={LogoImage} />

        <MenuContent>
          <MenuList>
            <MenuItem data-state="active" to={"/"}>
              Home
            </MenuItem>
            <MenuItem to={"/quem-somos"}>Quem Somos</MenuItem>
            <MenuItem to={"/servicos"}>Serviços</MenuItem>
            <MenuItem to={"/contato"}>Contato</MenuItem>
          </MenuList>

          <MenuButtons>
            <MenuButton
              appearance={"default"}
              text="Solicitar Orçamento"
              onClick={() => {
                void navigate("/contato");
              }}
            />
            <MenuButtonWhatsApp
              appearance="default"
              target={"_blank"}
              href={
                "https://wa.me/5511953678942?text=Ol%C3%A1%2C%20seja%20bem-vindo%20%C3%A0%20WH%20Gessos%20e%20Divis%C3%B3rias.%20Como%20podemos%20ajud%C3%A1-lo%3F"
              }
            >
              <WhatsAppIcon />
            </MenuButtonWhatsApp>
          </MenuButtons>
        </MenuContent>
      </MenuWrapper>
    </MenuStyled>
  );
};

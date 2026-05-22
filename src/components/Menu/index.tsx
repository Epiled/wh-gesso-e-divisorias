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
            <MenuButtonWhatsApp appearance="default" onClick={() => {}}>
              <WhatsAppIcon />
            </MenuButtonWhatsApp>
          </MenuButtons>
        </MenuContent>
      </MenuWrapper>
    </MenuStyled>
  );
};

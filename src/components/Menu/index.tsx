import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import {
  MenuButtonToggle,
  MenuLink,
  MenuLinkWrapper,
  MenuList,
  MenuListInner,
  MenuLogo,
  MenuOverlay,
  MenuServiceLink,
  MenuServices,
  MenuStyled,
} from "./styles";
import { MenuIcon } from "../Icons/MenuIcon";
import { ChevronIcon } from "../Icons/ChevronIcon";
import { CloseIcon } from "../Icons/CloseIcon";

export const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeSubmenu, setActiveSubmenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        const mobileStatus = width <= 1024;
        setIsMobile(mobileStatus);

        if (!mobileStatus) {
          setActiveMenu(false);
        }
      }
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <MenuStyled>
      {activeMenu && isMobile && <MenuOverlay onClick={toggleMenu} />}
      <MenuLogo to="/">
        <Logo />
      </MenuLogo>

      <MenuList $active={activeMenu}>
        <MenuListInner>
          <MenuLink data-state="active" to="/">
            Home
          </MenuLink>
          <MenuLink data-state="inactive" to="/sobre">
            Quem Somos
          </MenuLink>
          <MenuLinkWrapper
            onMouseEnter={() => {
              setActiveSubmenu(true);
            }}
            onMouseLeave={() => {
              setActiveSubmenu(false);
            }}
          >
            <MenuLink data-state="inactive" to="/servicos">
              Serviços
              <ChevronIcon
                $rotate={activeSubmenu ? 180 : 0}
                aria-hidden="true"
              />
            </MenuLink>
            {activeSubmenu && (
              <MenuServices>
                <MenuServiceLink
                  data-state="inactive"
                  to="/servicos/servico-01"
                >
                  Service 01
                </MenuServiceLink>
                <MenuServiceLink
                  data-state="inactive"
                  to="/servicos/servico-01"
                >
                  Service 02
                </MenuServiceLink>
                <MenuServiceLink
                  data-state="inactive"
                  to="/servicos/servico-01"
                >
                  Service 03
                </MenuServiceLink>
                <MenuServiceLink
                  data-state="inactive"
                  to="/servicos/servico-01"
                >
                  Service 04
                </MenuServiceLink>
              </MenuServices>
            )}
          </MenuLinkWrapper>
          <MenuLink data-state="inactive" to="/contato">
            Contato
          </MenuLink>
        </MenuListInner>
      </MenuList>

      <MenuButtonToggle
        icon={
          activeMenu ? (
            <CloseIcon
              $size="4rem"
              $color="var(--color-primary)"
              aria-hidden="true"
            />
          ) : (
            <MenuIcon
              $size="4rem"
              $color="var(--color-primary)"
              aria-hidden="true"
            />
          )
        }
        aria-label={"Abrir menu de navegação"}
        size="small"
        onClick={toggleMenu}
      />
    </MenuStyled>
  );
};

import { WhatsappFillIcon } from "../Icons/WhatsappFillIcon";
import { WhatsappContactStyled } from "./styles";

export const WhatsappContact = () => {
  return (
    <WhatsappContactStyled
      target={"_blank"}
      href={
        "https://wa.me/5511953678942?text=Ol%C3%A1%2C%20seja%20bem-vindo%20%C3%A0%20WH%20Gessos%20e%20Divis%C3%B3rias.%20Como%20podemos%20ajud%C3%A1-lo%3F"
      }
    >
      <WhatsappFillIcon />
    </WhatsappContactStyled>
  );
};

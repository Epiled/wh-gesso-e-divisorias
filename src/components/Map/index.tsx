import { Button } from "../Button";
import {
  MapBox,
  MapButton,
  MapContent,
  MapIframe,
  MapStyled,
  MapText,
  MapTitle,
  MapWrapper,
} from "./styles";

export const Map = () => {
  return (
    <MapStyled>
      <MapWrapper>
        <MapBox>
          <MapContent>
            <MapTitle title={"Envie sua mensagem"} decoration={"left"} />
            <MapText
              text={
                "Estamos localizados em Guarulhos - SP e atendemos toda a região com soluções personalizadas para seu projeto"
              }
            />
          </MapContent>
          <MapButton
            appearance={"outline-brand"}
            text="Ver no Google Maps"
            onClick={() => {
              return "";
            }}
          />
        </MapBox>
        <MapIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29278.61044650471!2d-46.55065212262471!3d-23.466729047328005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef55c7c86048d%3A0xb46307dc4ad8b735!2sCentro%2C%20Guarulhos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1778993304952!5m2!1spt-BR!2sbr"
          loading="lazy"
        />
      </MapWrapper>
    </MapStyled>
  );
};

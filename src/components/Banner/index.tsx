import { Button } from "../Button";

import {
  BannerBackground,
  BannerButtons,
  BannerContent,
  BannerImages,
  BannerStyled,
  BannerText,
  BannerTexts,
  BannerTitle,
  BannerWrapper,
} from "./styles";

import Background from "assets/img/banner.png";

export const Banner = () => {
  return (
    <BannerStyled>
      <BannerWrapper>
        <BannerContent>
          <BannerTitle>
            Soluções em Gesso e Divisórias com acabamento profissional
          </BannerTitle>

          <BannerTexts>
            <BannerText>
              Projetos residenciais e corporativos com qualidade, agilidade e
              estrutura moderna.
            </BannerText>
          </BannerTexts>
          <BannerButtons>
            <Button appearance="brand" text="Solicitar Orçamento" />
            <Button appearance="inverse" text="Ver Serviços" />
          </BannerButtons>
        </BannerContent>
      </BannerWrapper>
      <BannerImages>
        <BannerBackground
          src={Background}
          width="2560"
          height="626"
          fetchPriority="high"
          alt=""
        />
      </BannerImages>
    </BannerStyled>
  );
};

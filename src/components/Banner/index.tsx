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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Text of the printing and.
            </BannerText>
            <BannerText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </BannerText>
          </BannerTexts>
          <BannerButtons>
            <Button appearance="brand" text="Entrar em contato!" />
            <Button appearance="inverse" text="Whatsapp" />
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

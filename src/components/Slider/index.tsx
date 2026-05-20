import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { servicesImages } from "../../constants/sliderImages";
import {
  SliderContainer,
  SliderContent,
  SliderFrame,
  SliderImage,
  SliderStyled,
  SliderText,
  SliderTitle,
} from "./styles";

const SliderComponent = (Slider as any).default || Slider;

function MultipleItems() {
  const settings = {
    dots: false, // Geralmente removemos os dots para letreiros contínuos
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    // Configurações de Autoplay Contínuo
    autoplay: true,
    autoplaySpeed: 0, // Não espera nada
    speed: 8000, // Define o quão rápido a fita se move (maior = mais lento)
    cssEase: "linear", // Faz o movimento ser constante, sem acelerar ou frear
    pauseOnHover: true,
  };

  return (
    <SliderStyled>
      <SliderContent>
        <SliderTitle>Nossos Projetos</SliderTitle>
        <SliderText>
          Confira alguns dos nossos trabalhos e inspire-se.
        </SliderText>
      </SliderContent>
      <SliderContainer className="slider-container">
        <SliderComponent {...settings}>
          {servicesImages.map((service) => {
            const { id, src, alt } = service;

            return (
              <SliderFrame key={id}>
                <SliderImage src={src} alt={alt} />
              </SliderFrame>
            );
          })}
        </SliderComponent>
      </SliderContainer>
    </SliderStyled>
  );
}

export default MultipleItems;

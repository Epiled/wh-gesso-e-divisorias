import Slider from "react-slick";
import { servicesImages } from "../../constants/sliderImages";
import { SliderContainer, SliderFrame, SliderImage } from "./styles";

const SliderComponent = (Slider as any).default || Slider;

export const SliderAuto = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,

    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 0,

    speed: 10000,
    cssEase: "linear",

    pauseOnHover: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
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
  );
};

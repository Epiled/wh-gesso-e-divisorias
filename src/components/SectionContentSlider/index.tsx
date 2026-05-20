import { type SectionHeaderProps } from "../SectionHeader";
import Slider from "react-slick";
import {
  SectionContentHeader,
  SectionContentImage,
  SectionContentStyled,
  SectionContentText,
  SectionContentTitle,
  SectionThumb,
} from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Garante o funcionamento do Slider com o ecossistema do Vite/React
const SliderComponent = (Slider as any).default || Slider;

interface ImageProps {
  src: string;
  alt?: string;
}

interface ServicesPageProps {
  header: SectionHeaderProps;
  images: ImageProps[];
  orientation?: "default" | "reverse";
}

export const SectionContentSlider = (props: ServicesPageProps) => {
  const { header, images, orientation = "default" } = props;

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <SectionThumb
            src={images[i]?.src}
            alt={images[i]?.alt ?? `Thumbnail ${i + 1}`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: images?.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SectionContentStyled>
      <SectionContentHeader $orientation={orientation}>
        <SectionContentTitle text={header.title} />
        {header.text.map((text, i) => (
          <SectionContentText key={i} text={text} />
        ))}
      </SectionContentHeader>

      <SectionContentImage
        className="slider-container"
        $orientation={orientation}
      >
        {images.length > 0 ? (
          <SliderComponent {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img.src}
                  alt={img.alt ?? `Slide ${index + 1}`}
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            ))}
          </SliderComponent>
        ) : (
          <p>Nenhuma imagem fornecida</p>
        )}
      </SectionContentImage>
    </SectionContentStyled>
  );
};

// Exportando como default para aceitar qualquer nome no import da página
export default SectionContentSlider;

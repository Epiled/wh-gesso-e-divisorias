import { ArrowIcon } from "../Icons/ArrowIcon";
import {
  ServiceContent,
  ServiceImage,
  ServiceLink,
  ServiceStyled,
  ServiceText,
  ServiceTitle,
} from "./styles";

export interface ServiceProp {
  title: string;
  text: string;
  image: string;
  link: string;
}

export const Service = (props: ServiceProp) => {
  const { title, text, image, link } = props;
  return (
    <ServiceStyled>
      <ServiceImage src={image} alt="" />
      <ServiceContent>
        <ServiceTitle>{title}</ServiceTitle>
        <ServiceText>{text} </ServiceText>
        <ServiceLink to={`/servicos/${link}`}>
          Saiba mais <ArrowIcon />
        </ServiceLink>
      </ServiceContent>
    </ServiceStyled>
  );
};

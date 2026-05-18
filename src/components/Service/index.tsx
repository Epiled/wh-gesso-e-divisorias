import { ServiceStyled, ServiceText } from "./styles";

interface IService {
  text: string;
  image: string;
  route: string;
}

export const Service = (props: IService) => {
  const { text, image, route } = props;

  console.log(route);

  return (
    <ServiceStyled $image={image}>
      <ServiceText>{text}</ServiceText>
    </ServiceStyled>
  );
};

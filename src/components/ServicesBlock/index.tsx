import { SectionCenter } from "../SectionCenter";
import { Service, type ServiceProp } from "../Service";
import { ServicesList } from "./styles";

interface ServicesProp {
  title: string;
  texts: string[];
  list: ServiceProp[];
}

export const ServicesBlock = (props: ServicesProp) => {
  const { title, texts, list } = props;

  return (
    <SectionCenter
      header={{
        title: title,
        decoration: "center",
      }}
      texts={texts}
      children={
        <ServicesList>
          {list.map((item) => {
            const { title, text, image, link } = item;

            return (
              <Service
                key={title}
                title={title}
                text={text}
                image={image}
                link={link}
              />
            );
          })}
        </ServicesList>
      }
    />
  );
};

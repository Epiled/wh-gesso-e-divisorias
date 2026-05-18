import { ServicesContainer } from "./styles";

import { Contact } from "../../components/Contact";
import { SectionHeader } from "../../components/SectionHeader";
import { Service } from "../../components/Service";

import Image from "../../assets/img/banner.png";

const servicesRoutes = [
  {
    id: "",
    text: "Drywall",
    image: Image,
    route: "/service-01",
  },
  {
    id: "",
    text: "Drywall",
    image: Image,
    route: "/service-01",
  },
  {
    id: "",
    text: "Drywall",
    image: Image,
    route: "/service-01",
  },
];

const ServicesPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Serviços"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <ServicesContainer>
        {servicesRoutes.map((service) => {
          const { id, text, image, route } = service;
          return <Service key={id} text={text} image={image} route={route} />;
        })}
      </ServicesContainer>
      <Contact />
    </div>
  );
};

export default ServicesPage;

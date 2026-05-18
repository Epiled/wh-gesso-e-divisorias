import { ServicesContainer } from "./styles";

import { Contact } from "../../components/Contact";
import { SectionHeader } from "../../components/SectionHeader";
import { Service } from "../../components/Service";

import { servicesRoutes } from "../../constants/servicesRoutes";

const ServicesPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Nossos Serviços"}
        text={[
          "Soluções comppletas em gesso e divisórias para transformar ambientes com qualidade, funcionalidade e acabamento impecável.",
        ]}
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

import { PageHeader } from "../../components/PageHeader";
import { ServicesBlock } from "../../components/ServicesBlock";

import { servicesRoutes } from "../../constants/servicesRoutes";

import BackgroundImage from "assets/img/banner.png";

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        title={"Nossos Serviços"}
        text={
          "Soluções completas em gesso e divisórias para transformar ambientes com qualidade, funcionalidade e acabamento impecável."
        }
        background={BackgroundImage}
        decoration="left"
      />

      <ServicesBlock
        title="Todos os Serviços"
        texts={[
          "Soluções completas em gesso e divisórias para todos os tipos de ambientes.",
        ]}
        list={servicesRoutes}
      />
    </>
  );
};

export default ServicesPage;

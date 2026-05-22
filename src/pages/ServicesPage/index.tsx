import { PageHeader } from "../../components/PageHeader";

import BackgroundImage from "assets/img/banner.png";
import { ServicesBlock } from "../../components/ServicesBlock";
import { servicesRoutes } from "../../constants/servicesRoutes";

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

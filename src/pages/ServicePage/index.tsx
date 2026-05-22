import { PageHeader } from "../../components/PageHeader";

import BackgroundImage from "assets/img/banner.png";

const ServicePage = () => {
  return (
    <PageHeader
      title={"Drywall"}
      text={
        "Mais do que construir paredes e tetos, transformamos ambientes e realizamos sonhos com qualidade, compromisso e excelência."
      }
      background={BackgroundImage}
      decoration="left"
    />

    
  );
};

export default ServicePage;

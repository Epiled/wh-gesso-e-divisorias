import { PageHeader } from "../../components/PageHeader";
import { SectionContent } from "../../components/SectionContent";

import BackgroundImage from "assets/img/banner.png";

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title={"Quem Somos"}
        text={
          "Mais do que construir paredes e tetos, transformamos ambientes e realizamos sonhos com qualidade, compromisso e excelência."
        }
        background={BackgroundImage}
        decoration="left"
      />
      <SectionContent
        header={{
          complement: "Nossa história",
          title: "Compromisso com qualidade em cada detalhe",
          decoration: "left",
        }}
        texts={[
          "A Wellignton Henrique Gesos e Divisórias é referência em soluções de gesso e divisórias, atuando com compromisso, qualidade e atenção aos detalhes.",
          "Transformamos ambientes com soluções modernas, funcionais e  personalizadas, sempre buscando superar expecctativas.",
        ]}
        image={BackgroundImage}
        qualifications={true}
      />
    </>
  );
};

export default AboutPage;

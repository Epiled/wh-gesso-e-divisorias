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
          "A WH Gesos e Divisórias nasceu com o propósito de entregar soluções completas em gesso e divisórias, unindo técnica, experiência e atendimento personalizado.",
          "Ao longo dos anos, construímos uma trajetória sólida, marcada pela confiança dos nossos clientes e pelo cuidado em cada etapa do projeto.",
          "Trabalhamos com materiais de qualidade, equipe especializada e foco em acabamentos que valorizam e transformam ambientes.",
        ]}
        image={BackgroundImage}
        qualifications={true}
      />
    </>
  );
};

export default AboutPage;

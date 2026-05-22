import { useNavigate } from "react-router";
import { PageHeader } from "../../components/PageHeader";
import { SectionCenter } from "../../components/SectionCenter";
import { SectionContent } from "../../components/SectionContent";
import { ServicesBlock } from "../../components/ServicesBlock";
import { ContactForm } from "../../components/ContactForm";
import { SliderAuto } from "../../components/Slider";

import { servicesRoutes } from "../../constants/servicesRoutes";

import BackgroundImage from "assets/img/banner.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        breadcrumb={false}
        title={"Soluções em Gessos e Divisórias com acabamento profissional"}
        text={
          "Projetos residenciais e corporativos com qualidade, agilidade e estrutura moderna."
        }
        background={BackgroundImage}
        buttons={[
          {
            text: "Solicitar Orçamento",
            appearance: "default",
            onClick: () => {
              void navigate("/contato");
            },
          },
          {
            text: "Ver Serviços",
            appearance: "outline",
            onClick: () => {
              void navigate("/servicos");
            },
          },
        ]}
        qualifications
      />

      <ServicesBlock
        title="Nossos Serviços"
        texts={[
          "Soluções completas em gesso e divisórias para todos os tipos de ambientes.",
        ]}
        list={servicesRoutes}
      />

      <SectionContent
        header={{
          title: "Quem Somos",
          decoration: "left",
        }}
        texts={[
          "A Wellignton Henrique Gesos e Divisórias é referência em soluções de gesso e divisórias, atuando com compromisso, qualidade e  atenção aos detalhes.",
          "Transformamos ambientes com soluções modernas, funcionais e  personalizadas, sempre buscando superar expecctativas.",
        ]}
        image={BackgroundImage}
        qualifications={true}
        direction="reverse"
        buttons={[
          {
            appearance: "default",
            text: "Conehça Nossa História",
            onClick: () => {
              void navigate("/quem-somos");
            },
          },
        ]}
      />

      <SectionCenter
        header={{
          title: "Nossos Projetos",
        }}
        texts={["Confira alguns dos nosos trabalhos e inspire-se."]}
        children={<SliderAuto />}
      />

      <ContactForm />
    </>
  );
};

export default HomePage;

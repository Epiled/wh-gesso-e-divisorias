import { Contact } from "../../components/Contact";
import { SectionContent } from "../../components/SectionContent";
import { SectionHeader } from "../../components/SectionHeader";

import Background from "assets/img/banner.png";

const AboutPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Quem somos"}
        text={[
          "Mais do que construir paredes e tetos, transformamos ambientes e realizamos sonhos com qualidade, compromisso e excelência.",
        ]}
      />
      <SectionContent
        header={{
          title: "Nosso início",
          text: [
            "A WH Gesos e Divisórias nasceu com o propósito de entrega soluções completas em gesso e divisórias, unindo técnica, experiência e atendimento personalizado.",
            "Ao londo dos aos, construimos uma trajetória sólida, marcada pela confiança dos nossos clientes e pelo cuidado em cada etapa do projeto.",
            "Trabalhamos com materiais de qualidade, equipe especializada e foco em acabamentos que valorizam e transforman ambientes.",
          ],
        }}
        image={{
          src: Background,
        }}
        orientation={"reverse"}
      />
      <Contact />
    </div>
  );
};

export default AboutPage;

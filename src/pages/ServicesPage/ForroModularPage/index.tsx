import { Contact } from "../../../components/Contact";
import SectionContentSlider from "../../../components/SectionContentSlider";
import { SectionHeader } from "../../../components/SectionHeader";

import Service1 from "assets/img/service-1.jpeg";
import Service2 from "assets/img/service-2.jpeg";
import Service3 from "assets/img/service-3.jpeg";
import Service4 from "assets/img/service-4.jpeg";
import Service5 from "assets/img/service-5.jpeg";
import Service6 from "assets/img/service-6.jpeg";
import Service7 from "assets/img/service-7.jpeg";
import Service8 from "assets/img/service-8.jpeg";

const ForroModularPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Forro modular"}
        text={[
          "Forros modulares com visual moderno e instalação prática para espaços corporativos e comerciais.",
        ]}
      />
      <SectionContentSlider
        header={{
          title: "O que é Forro modular",
          text: [
            "O forro modular permite uma instalação rápida e eficiente, facilitando o acesso a instalações elétricas e de ar condicionado. Com um design moderno e opções personalizáveis, nossa equipe está pronta para transformar seu ambiente, garantindo um acabamento limpo e organizado que atenda às suas necessidades.",
          ],
        }}
        images={[
          { src: Service1, alt: "" },
          { src: Service2, alt: "" },
          { src: Service3, alt: "" },
          { src: Service4, alt: "" },
          { src: Service5, alt: "" },
          { src: Service6, alt: "" },
          { src: Service7, alt: "" },
          { src: Service8, alt: "" },
        ]}
        orientation={"reverse"}
      />
      <Contact />
    </div>
  );
};

export default ForroModularPage;

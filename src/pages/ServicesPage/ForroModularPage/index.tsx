import { Contact } from "../../../components/Contact";
import SectionContentSlider from "../../../components/SectionContentSlider";
import { SectionHeader } from "../../../components/SectionHeader";

import Service1 from "assets/img/banner.png";

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
        ]}
        orientation={"reverse"}
      />
      <Contact />
    </div>
  );
};

export default ForroModularPage;

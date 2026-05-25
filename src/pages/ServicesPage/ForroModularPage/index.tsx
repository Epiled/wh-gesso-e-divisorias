import { PageHeader } from "../../../components/PageHeader";
import { SectionContent } from "../../../components/SectionContent";

import BackgroundImage from "assets/img/banner.png";

const ForroModularPage = () => {
  return (
    <>
      <PageHeader
        title={"Forro modular"}
        text={
          "Forros modulares com visual moderno e instalação prática para espaços corporativos e comerciais."
        }
        background={BackgroundImage}
        decoration="left"
      />
      <SectionContent
        header={{
          title: "O que é Forro modular?",
        }}
        texts={[
          "O forro modular permite uma instalação rápida e eficiente, facilitando o acesso a instalações elétricas e de ar condicionado. Com um design moderno e opções personalizáveis, nossa equipe está pronta para transformar seu ambiente, garantindo um acabamento limpo e organizado que atenda às suas necessidades.",
        ]}
        image={BackgroundImage}
      />
    </>
  );
};

export default ForroModularPage;

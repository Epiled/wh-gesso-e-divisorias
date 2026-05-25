import { PageHeader } from "../../../components/PageHeader";
import { SectionContent } from "../../../components/SectionContent";

import BackgroundImage from "assets/img/banner.png";

const DivisoriaEucatexPage = () => {
  return (
    <>
      <PageHeader
        title={"Divisória Eucatex"}
        text={
          "Divisórias Eucatex, práticas e funcionais para organização de ambientes corporativos, com excelente acabamento."
        }
        background={BackgroundImage}
        decoration="left"
      />
      <SectionContent
        header={{
          title: "O que é Divisória Eucatex?",
        }}
        texts={[
          "As divisórias Eucatex oferecem uma solução prática e estética para criar ambientes funcionais. Feitas com materiais sustentáveis, algumas opções proporcionam isolamento acústico e são fáceis de instalar. Com nossa equipe especializada, você pode contar com uma instalação eficiente que atende às suas necessidades, seja em escritórios ou residências.",
        ]}
        image={BackgroundImage}
      />
    </>
  );
};

export default DivisoriaEucatexPage;

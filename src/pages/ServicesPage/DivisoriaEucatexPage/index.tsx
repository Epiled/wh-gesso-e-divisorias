import { Contact } from "../../../components/Contact";
import { SectionContent } from "../../../components/SectionContent";
import { SectionHeader } from "../../../components/SectionHeader";

import Background from "assets/img/banner.png";

const DivisoriaEucatexPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Divisória Eucatex"}
        text={[
          "Divisórias Eucatex práticas e funcionais para organização de ambientes corporativos com excelente acabamento.",
        ]}
      />
      <SectionContent
        header={{
          title: "O que é Divisória Eucatex",
          text: [
            "As divisórias Eucatex oferecem uma solução prática e estética para criar ambientes funcionais. Feitas com materiais sustentáveis, algumas opções proporcionam isolamento acústico e são fáceis de instalar. Com nossa equipe especializada, você pode contar com uma instalação eficiente que atende às suas necessidades, seja em escritórios ou residências.",
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

export default DivisoriaEucatexPage;

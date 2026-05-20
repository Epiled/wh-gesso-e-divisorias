import { Contact } from "../../../components/Contact";
import SectionContentSlider from "../../../components/SectionContentSlider";
import { SectionHeader } from "../../../components/SectionHeader";

import Service1 from "assets/img/banner.png";

const DivisoriaEucatexPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Divisória Eucatex"}
        text={[
          "Divisórias Eucatex práticas e funcionais para organização de ambientes corporativos com excelente acabamento.",
        ]}
      />
      <SectionContentSlider
        header={{
          title: "O que é Divisória Eucatex",
          text: [
            "As divisórias Eucatex oferecem uma solução prática e estética para criar ambientes funcionais. Feitas com materiais sustentáveis, algumas opções proporcionam isolamento acústico e são fáceis de instalar. Com nossa equipe especializada, você pode contar com uma instalação eficiente que atende às suas necessidades, seja em escritórios ou residências.",
          ],
        }}
        images={[{ src: Service1, alt: "" }]}
        orientation={"reverse"}
      />
      <Contact />
    </div>
  );
};

export default DivisoriaEucatexPage;

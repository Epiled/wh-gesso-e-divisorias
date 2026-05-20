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

export default DivisoriaEucatexPage;

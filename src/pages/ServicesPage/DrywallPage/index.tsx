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

const DrywallPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Drywall"}
        text={[
          "Estruturas e paredes em drywall com instalação rápida, acabamento moderno e excelente aproveitamento do espaço.",
        ]}
      />
      <SectionContentSlider
        header={{
          title: "O que é Drywall",
          text: [
            "O drywall é uma solução moderna e versátil para construção de paredes e forros, ideal para quem busca agilidade e eficiência na obra. Composto por placas de gesso acartonado, ele oferece excelente isolamento acústico e térmico, além de ser resistente e leve. A instalação é rápida e limpa, minimizando a geração de resíduos. Nossa equipe está pronta para executar o serviço com precisão, garantindo acabamentos impecáveis e personalizáveis, adaptando-se ao seu estilo e necessidades. Seja para criar divisórias, forros ou acabamentos decorativos, estamos aqui para transformar seu espaço de forma prática e eficiente.",
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

export default DrywallPage;

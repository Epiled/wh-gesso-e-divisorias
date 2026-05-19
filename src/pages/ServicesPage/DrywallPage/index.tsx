import { Contact } from "../../../components/Contact";
import { SectionContent } from "../../../components/SectionContent";
import { SectionHeader } from "../../../components/SectionHeader";

import Background from "assets/img/banner.png";

const DrywallPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Drywall"}
        text={[
          "Estruturas e paredes em drywall com instalação rápida, acabamento moderno e excelente aproveitamento do espaço.",
        ]}
      />
      <SectionContent
        header={{
          title: "O que é Drywall",
          text: [
            "O drywall é uma solução moderna e versátil para construção de paredes e forros, ideal para quem busca agilidade e eficiência na obra. Composto por placas de gesso acartonado, ele oferece excelente isolamento acústico e térmico, além de ser resistente e leve. A instalação é rápida e limpa, minimizando a geração de resíduos. Nossa equipe está pronta para executar o serviço com precisão, garantindo acabamentos impecáveis e personalizáveis, adaptando-se ao seu estilo e necessidades. Seja para criar divisórias, forros ou acabamentos decorativos, estamos aqui para transformar seu espaço de forma prática e eficiente.",
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

export default DrywallPage;

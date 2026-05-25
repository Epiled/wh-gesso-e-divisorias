import { PageHeader } from "../../../components/PageHeader";
import { SectionContent } from "../../../components/SectionContent";

import BackgroundImage from "assets/img/banner.png";

const DrywallPage = () => {
  return (
    <>
      <PageHeader
        title={"Drywall"}
        text={
          "Estruturas e paredes em drywall com instalação rápida, acabamento moderno e excelente aproveitamento do espaço."
        }
        background={BackgroundImage}
        decoration="left"
      />
      <SectionContent
        header={{
          title: "O que é Drywall?",
        }}
        texts={[
          "O drywall é uma solução moderna e versátil para construção de paredes e forros, ideal para quem busca agilidade e eficiência na obra. Composto por placas de gesso acartonado, ele oferece excelente isolamento acústico e térmico, além de ser resistente e leve. A instalação é rápida e limpa, minimizando a geração de resíduos. Nossa equipe está pronta para executar o serviço com precisão, garantindo acabamentos impecáveis e personalizáveis, adaptando-se ao seu estilo e necessidades. Seja para criar divisórias, forros ou acabamentos decorativos, estamos aqui para transformar seu espaço de forma prática e eficiente.",
        ]}
        image={BackgroundImage}
      />
    </>
  );
};

export default DrywallPage;

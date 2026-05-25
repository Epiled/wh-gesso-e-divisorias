import { PageHeader } from "../../../components/PageHeader";
import { SectionContent } from "../../../components/SectionContent";

import BackgroundImage from "assets/img/banner.png";

const LuminariasPage = () => {
  return (
    <>
      <PageHeader
        title={"Luminárias"}
        text={
          "Estruturas e nichos em gesso para iluminação embutida, oferecendo integração perfeita entre design, conforto e funcionalidade."
        }
        background={BackgroundImage}
        decoration="left"
      />
      <SectionContent
        header={{
          title: "O que são Luminárias?",
        }}
        texts={[
          "Nossas luminárias são projetadas para aliar funcionalidade e estilo. Com uma variedade de modelos e acabamentos, cada luminária é escolhida para complementar a decoração do seu espaço. Estou aqui com minha equipe para realizar a instalação com cuidado, assegurando que a iluminação crie uma atmosfera acolhedora e convidativa.",
        ]}
        image={BackgroundImage}
      />
    </>
  );
};

export default LuminariasPage;

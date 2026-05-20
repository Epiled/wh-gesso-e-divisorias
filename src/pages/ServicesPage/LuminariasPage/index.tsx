import { Contact } from "../../../components/Contact";
import SectionContentSlider from "../../../components/SectionContentSlider";
import { SectionHeader } from "../../../components/SectionHeader";

import Service1 from "assets/img/banner.png";

const LuminariasPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Luminárias"}
        text={[
          "Estruturas e nichos em gesso para iluminação embutida, oferecendo integração perfeita entre design, conforto e funcionalidade.",
        ]}
      />
      <SectionContentSlider
        header={{
          title: "O que é Luminárias",
          text: [
            "Nossas luminárias são projetadas para aliar funcionalidade e estilo. Com uma variedade de modelos e acabamentos, cada luminária é escolhida para complementar a decoração do seu espaço. Estou aqui com minha equipe para realizar a instalação com cuidado, assegurando que a iluminação crie uma atmosfera acolhedora e convidativa.",
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

export default LuminariasPage;

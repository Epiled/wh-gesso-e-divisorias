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

export default LuminariasPage;

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

const ForrosDeGessoPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Forro de Gesso"}
        text={[
          "Soluções modernas em forro de gesso para ambientes residenciais e comerciais, proporcionando acabamento sofisticado, conforto e valorização do espaço.",
        ]}
      />
      <SectionContentSlider
        header={{
          title: "O que é Forro de Gesso",
          text: [
            "O forro de gesso é uma solução elegante que proporciona um acabamento liso e sofisticado ao seu ambiente. Ideal para esconder imperfeições e fiações, ele permite a criação de desenhos personalizados. Com a minha equipe, você pode contar com um trabalho cuidadoso e detalhado, garantindo que cada instalação atenda às suas expectativas.",
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

export default ForrosDeGessoPage;

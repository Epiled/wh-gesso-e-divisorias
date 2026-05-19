import { Contact } from "../../../components/Contact";
import { SectionContent } from "../../../components/SectionContent";
import { SectionHeader } from "../../../components/SectionHeader";

import Background from "assets/img/banner.png";

const ForrosDeGessoPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Forro de Gesso"}
        text={[
          "Soluções modernas em forro de gesso para ambientes residenciais e comerciais, proporcionando acabamento sofisticado, conforto e valorização do espaço.",
        ]}
      />
      <SectionContent
        header={{
          title: "O que é Forro de Gesso",
          text: [
            "O forro de gesso é uma solução elegante que proporciona um acabamento liso e sofisticado ao seu ambiente. Ideal para esconder imperfeições e fiações, ele permite a criação de desenhos personalizados. Com a minha equipe, você pode contar com um trabalho cuidadoso e detalhado, garantindo que cada instalação atenda às suas expectativas.",
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

export default ForrosDeGessoPage;

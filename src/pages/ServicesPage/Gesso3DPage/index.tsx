import { Contact } from "../../../components/Contact";
import { SectionContent } from "../../../components/SectionContent";
import { SectionHeader } from "../../../components/SectionHeader";

import Background from "assets/img/banner.png";

const Gesso3DPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Gesso 3D"}
        text={[
          "Revestimentos em gesso 3D que transformam paredes comuns em ambientes modernos, elegantes e cheios de personalidade.",
        ]}
      />
      <SectionContent
        header={{
          title: "O que é Gesso 3D",
          text: [
            "O gesso 3D é um revestimento decorativo utilizado para transformar paredes comuns em superfícies modernas e elegantes. Com diferentes texturas e formatos, ele cria profundidade, personalidade e um visual sofisticado para diversos tipos de ambientes.",
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

export default Gesso3DPage;

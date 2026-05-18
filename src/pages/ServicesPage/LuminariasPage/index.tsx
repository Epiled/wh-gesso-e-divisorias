import { Contact } from "../../../components/Contact";
import { SectionContent } from "../../../components/SectionContent";
import { SectionHeader } from "../../../components/SectionHeader";

import Background from "assets/img/banner.png";

const LuminariasPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Luminárias"}
        text={[
          "Estruturas e nichos em gesso para iluminação embutida, oferecendo integração perfeita entre design, conforto e funcionalidade.",
        ]}
      />
      <SectionContent
        header={{
          title: "O que é Luminárias",
          text: [
            "As luminárias em gesso são estruturas planejadas para integrar iluminação de forma discreta e sofisticada ao ambiente. Elas ajudam a criar efeitos de luz modernos, valorizando a decoração e proporcionando mais conforto visual.",
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

export default LuminariasPage;

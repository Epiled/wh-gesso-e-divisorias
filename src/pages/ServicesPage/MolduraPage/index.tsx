import { Contact } from "../../../components/Contact";
import { SectionContent } from "../../../components/SectionContent";
import { SectionHeader } from "../../../components/SectionHeader";

import Background from "assets/img/banner.png";

const MolduraPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Moldura"}
        text={[
          "Molduras em gesso com acabamento impecável para destacar detalhes arquitetônicos e trazer mais sofisticação ao ambiente.",
        ]}
      />
      <SectionContent
        header={{
          title: "O que é Moldura",
          text: [
            "As molduras em gesso são utilizadas para valorizar o acabamento entre teto e paredes, trazendo mais elegância e harmonia para o ambiente. Elas combinam perfeitamente com diferentes estilos de decoração, do clássico ao moderno.",
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

export default MolduraPage;

import { Contact } from "../../../components/Contact";
import { SectionContent } from "../../../components/SectionContent";
import { SectionHeader } from "../../../components/SectionHeader";

import Background from "assets/img/banner.png";

const SancaPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Sanca"}
        text={[
          "Projetos de sancas abertas, fechadas e iluminadas, criando efeitos modernos de iluminação e um acabamento refinado para qualquer ambiente.",
        ]}
      />
      <SectionContent
        header={{
          title: "O que é Sanca",
          text: [
            "A sanca em gesso é um acabamento aplicado entre paredes e teto que proporciona sofisticação e destaque à iluminação do ambiente. Pode ser aberta, fechada ou invertida, permitindo criar efeitos modernos e aconchegantes.",
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

export default SancaPage;

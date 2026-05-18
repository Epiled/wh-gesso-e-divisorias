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
            "O forro de gesso é uma solução versátil e sofisticada utilizada para melhorar o acabamento de ambientes residenciais e comerciais. Além de proporcionar um visual moderno, permite integrar iluminação, esconder imperfeições e criar projetos personalizados com excelente custo-benefício.",
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

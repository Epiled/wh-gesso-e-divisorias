import { Contact } from "../../../components/Contact";
import { SectionContent } from "../../../components/SectionContent";
import { SectionHeader } from "../../../components/SectionHeader";

import Background from "assets/img/banner.png";

const ForrovidPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Forrovid"}
        text={[
          "Soluções em forros removíveis ideais para ambientes comerciais que exigem praticidade e fácil manutenção.",
        ]}
      />
      <SectionContent
        header={{
          title: "O que é Forrovid",
          text: [
            "O Forrovid é uma solução leve e resistente, ideal para diversos ambientes, especialmente onde se busca um acabamento moderno e estilizado. Sua instalação é rápida e prática, e o material é fácil de limpar e manter. Com minha equipe, você terá suporte total na escolha e instalação do Forrovid, garantindo um resultado durável e esteticamente agradável para o seu espaço.",
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

export default ForrovidPage;

import { PageHeader } from "../../../components/PageHeader";
import { SectionContent } from "../../../components/SectionContent";

import BackgroundImage from "assets/img/banner.png";

const ForrovidPage = () => {
  return (
    <>
      <PageHeader
        title={"Forrovid"}
        text={
          "Soluções em forros removíveis ideais para ambientes comerciais que exigem praticidade e fácil manutenção."
        }
        background={BackgroundImage}
        decoration="left"
      />
      <SectionContent
        header={{
          title: "O que é Forrovid?",
        }}
        texts={[
          "O Forrovid é uma solução leve e resistente, ideal para diversos ambientes, especialmente onde se busca um acabamento moderno e estilizado. Sua instalação é rápida e prática, e o material é fácil de limpar e manter. Com minha equipe, você terá suporte total na escolha e instalação do Forrovid, garantindo um resultado durável e esteticamente agradável para o seu espaço.",
        ]}
        image={BackgroundImage}
      />
    </>
  );
};

export default ForrovidPage;

import { Contact } from "../../../components/Contact";
import { SectionContentSlider } from "../../../components/SectionContentSlider";
import { SectionHeader } from "../../../components/SectionHeader";

import Service1 from "assets/img/service-1.jpeg";
import Service2 from "assets/img/service-2.jpeg";
import Service3 from "assets/img/service-3.jpeg";
import Service4 from "assets/img/service-4.jpeg";
import Service5 from "assets/img/service-5.jpeg";
import Service6 from "assets/img/service-6.jpeg";
import Service7 from "assets/img/service-7.jpeg";
import Service8 from "assets/img/service-8.jpeg";

const ForrovidPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Forrovid"}
        text={[
          "Soluções em forros removíveis ideais para ambientes comerciais que exigem praticidade e fácil manutenção.",
        ]}
      />
      <SectionContentSlider
        header={{
          title: "O que é Forrovid",
          text: [
            "O Forrovid é uma solução leve e resistente, ideal para diversos ambientes, especialmente onde se busca um acabamento moderno e estilizado. Sua instalação é rápida e prática, e o material é fácil de limpar e manter. Com minha equipe, você terá suporte total na escolha e instalação do Forrovid, garantindo um resultado durável e esteticamente agradável para o seu espaço.",
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

export default ForrovidPage;

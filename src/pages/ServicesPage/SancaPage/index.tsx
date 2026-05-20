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

const SancaPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Sanca"}
        text={[
          "Projetos de sancas abertas, fechadas e iluminadas, criando efeitos modernos de iluminação e um acabamento refinado para qualquer ambiente.",
        ]}
      />
      <SectionContentSlider
        header={{
          title: "O que é Sanca",
          text: [
            "A sanca é um detalhe arquitetônico que cria uma iluminação indireta, valorizando a estética do ambiente. Disponível em diferentes estilos, ela se adapta ao seu gosto pessoal. Nossa equipe está pronta para executar a instalação com precisão, garantindo que sua sanca não apenas embeleze, mas também funcione perfeitamente em seu espaço.",
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

export default SancaPage;

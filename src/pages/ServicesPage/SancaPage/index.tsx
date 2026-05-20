import { Contact } from "../../../components/Contact";
import SectionContentSlider from "../../../components/SectionContentSlider";
import { SectionHeader } from "../../../components/SectionHeader";

import Service1 from "assets/img/banner.png";

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
        images={[{ src: Service1, alt: "" }]}
        orientation={"reverse"}
      />
      <Contact />
    </div>
  );
};

export default SancaPage;

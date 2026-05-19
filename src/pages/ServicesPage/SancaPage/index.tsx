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
            "A sanca é um detalhe arquitetônico que cria uma iluminação indireta, valorizando a estética do ambiente. Disponível em diferentes estilos, ela se adapta ao seu gosto pessoal. Nossa equipe está pronta para executar a instalação com precisão, garantindo que sua sanca não apenas embeleze, mas também funcione perfeitamente em seu espaço.",
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

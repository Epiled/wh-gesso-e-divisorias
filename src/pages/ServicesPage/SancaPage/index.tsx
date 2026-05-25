import { PageHeader } from "../../../components/PageHeader";
import { SectionContent } from "../../../components/SectionContent";

import BackgroundImage from "assets/img/banner.png";

const SancaPage = () => {
  return (
    <>
      <PageHeader
        title={"Sanca"}
        text={
          "Projetos de sancas abertas, fechadas e iluminadas, criando efeitos modernos de iluminação e um acabamento refinado para qualquer ambiente."
        }
        background={BackgroundImage}
        decoration="left"
      />
      <SectionContent
        header={{
          title: "O que é Sanca?",
        }}
        texts={[
          "A sanca é um detalhe arquitetônico que cria uma iluminação indireta, valorizando a estética do ambiente. Disponível em diferentes estilos, ela se adapta ao seu gosto pessoal. Nossa equipe está pronta para executar a instalação com precisão, garantindo que sua sanca não apenas embeleze, mas também funcione perfeitamente em seu espaço.",
        ]}
        image={BackgroundImage}
      />
    </>
  );
};

export default SancaPage;

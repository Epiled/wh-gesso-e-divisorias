import { Contact } from "../../../components/Contact";
import { SectionContent } from "../../../components/SectionContent";
import { SectionHeader } from "../../../components/SectionHeader";

import Background from "assets/img/banner.png";

const ForroDePVCPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Forro de PVC"}
        text={[
          "Forros de PVC resistentes e versáteis, perfeitos para ambientes que buscam durabilidade e ótimo custo-benefício.",
        ]}
      />
      <SectionContent
        header={{
          title: "O que é Forro de PVC",
          text: [
            "O forro de PVC é uma alternativa prática e esteticamente agradável, perfeito para ambientes como banheiros e cozinhas. Ele é resistente à umidade e fácil de manter. Nossa equipe se dedica a garantir uma instalação de qualidade, proporcionando um resultado que combina beleza e funcionalidade.",
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

export default ForroDePVCPage;

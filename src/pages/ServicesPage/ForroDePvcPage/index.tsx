import { PageHeader } from "../../../components/PageHeader";
import { SectionContent } from "../../../components/SectionContent";

import BackgroundImage from "assets/img/banner.png";

const ForroDePVCPage = () => {
  return (
    <>
      <PageHeader
        title={"Forro de PVC"}
        text={
          "Forros de PVC resistentes e versáteis, perfeitos para ambientes que buscam durabilidade e ótimo custo-benefício."
        }
        background={BackgroundImage}
        decoration="left"
      />
      <SectionContent
        header={{
          title: "O que é Forro de PVC?",
        }}
        texts={[
          "O forro de PVC é uma alternativa prática e esteticamente agradável, perfeito para ambientes como banheiros e cozinhas. Ele é resistente à umidade e fácil de manter. Nossa equipe se dedica a garantir uma instalação de qualidade, proporcionando um resultado que combina beleza e funcionalidade.",
        ]}
        image={BackgroundImage}
      />
    </>
  );
};

export default ForroDePVCPage;

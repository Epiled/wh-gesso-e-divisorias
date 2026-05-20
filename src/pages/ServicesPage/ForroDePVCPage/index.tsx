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

const ForroDePVCPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Forro de PVC"}
        text={[
          "Forros de PVC resistentes e versáteis, perfeitos para ambientes que buscam durabilidade e ótimo custo-benefício.",
        ]}
      />
      <SectionContentSlider
        header={{
          title: "O que é Forro de PVC",
          text: [
            "O forro de PVC é uma alternativa prática e esteticamente agradável, perfeito para ambientes como banheiros e cozinhas. Ele é resistente à umidade e fácil de manter. Nossa equipe se dedica a garantir uma instalação de qualidade, proporcionando um resultado que combina beleza e funcionalidade.",
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

export default ForroDePVCPage;

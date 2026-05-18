import { Infos } from "../../components/Infos";
import { SectionHeader } from "../../components/SectionHeader";
import { ContactPageForm, ContactPageGrid } from "./style";

const ContactPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Entre em Contato"}
        text={[
          "Estamos prontos para transformar seu ambiente com soluções em gesso e divisórias. fale com nossa equipe e slicite um orçamento sem compromisso.",
        ]}
      />

      <ContactPageGrid>
        <Infos />
        <ContactPageForm />
      </ContactPageGrid>
    </div>
  );
};

export default ContactPage;

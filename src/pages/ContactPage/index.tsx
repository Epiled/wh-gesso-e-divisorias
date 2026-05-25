import { ContactForm } from "../../components/ContactForm";
import { Map } from "../../components/Map";
import { PageHeader } from "../../components/PageHeader";

import BackgroundImage from "assets/img/banner.png";

const ContactPage = () => {
  return (
    <>
      <PageHeader
        title={"Entre em Contato"}
        text={
          "Estamos prontos para transformar seu ambiente com soluções em gesso e divisórias. Fale com nossa equipe e solicite um orçamento sem compromisso."
        }
        background={BackgroundImage}
        decoration="left"
      />
      <ContactForm />
      <Map />
    </>
  );
};

export default ContactPage;

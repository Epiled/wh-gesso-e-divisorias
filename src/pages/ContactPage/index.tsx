import { Infos } from "../../components/Infos";
import { SectionHeader } from "../../components/SectionHeader";
import { ContactPageForm, ContactPageGrid } from "./style";

const ContactPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Contato"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />

      <ContactPageGrid>
        <Infos />
        <ContactPageForm />
      </ContactPageGrid>
    </div>
  );
};

export default ContactPage;

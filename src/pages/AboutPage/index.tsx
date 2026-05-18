import { Contact } from "../../components/Contact";
import { SectionContent } from "../../components/SectionContent";
import { SectionHeader } from "../../components/SectionHeader";

import Background from "assets/img/banner.png";

const AboutPage = () => {
  return (
    <div>
      <SectionHeader
        title={"Quem somos"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <SectionContent
        header={{
          title: "Nosso início",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        }}
        image={{
          src: Background,
        }}
        orientation={"reverse"}
      />
      <SectionContent
        header={{
          title: "Nosso início",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        }}
        image={{
          src: Background,
        }}
      />
      <Contact />
    </div>
  );
};

export default AboutPage;

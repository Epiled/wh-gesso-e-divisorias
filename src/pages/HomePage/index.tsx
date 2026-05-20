import { Achievement } from "../../components/Achievement";
import { Banner } from "../../components/Banner";
import { Contact } from "../../components/Contact";
import MultipleItems from "../../components/Slider";
import { HomeAchievements, HomeAchievementsWrapper } from "./styles";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HomeAchievements>
        <HomeAchievementsWrapper>
          <Achievement value={"+1200"} text="obras executadas" />
          <Achievement value={"20"} text="anos de experiência" />
          <Achievement value={"+300"} text="clientes satifesitos" />
        </HomeAchievementsWrapper>
      </HomeAchievements>
      <MultipleItems />
      <Contact />
    </div>
  );
};

export default HomePage;

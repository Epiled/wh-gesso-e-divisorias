import { Achievement } from "../Achievement";
import { AchievementsStyled, AchievementsWrapper } from "./styles";

export const Achievements = () => {
  return (
    <AchievementsStyled>
      <AchievementsWrapper>
        <Achievement value={"1200"} text="obras executadas" />
        <Achievement value={"20"} text="anos de experiência" />
        <Achievement value={"300"} text="clientes satifesitos" />
      </AchievementsWrapper>
    </AchievementsStyled>
  );
};

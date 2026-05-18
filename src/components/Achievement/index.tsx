import "./styles";
import { AchievementStyled, AchievementText, AchievementValue } from "./styles";

interface IAchievement {
  value: string;
  text?: string;
}

export const Achievement = (props: IAchievement) => {
  const { value, text } = props;
  return (
    <AchievementStyled>
      <AchievementValue>{value}</AchievementValue>
      <AchievementText>{text}</AchievementText>
    </AchievementStyled>
  );
};

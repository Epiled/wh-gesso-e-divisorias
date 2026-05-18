import { Text } from "../Text";
import { Title } from "../Title";
import { SectionHeaderContainer, SectionHeaderStyled } from "./styles";

export interface SectionHeaderProps {
  title: string;
  text: string[];
}

export const SectionHeader = (props: SectionHeaderProps) => {
  const { title, text } = props;

  return (
    <SectionHeaderStyled>
      <SectionHeaderContainer>
        <Title text={title} />
        {text.map((text, i) => {
          return <Text key={i} text={text} />;
        })}
      </SectionHeaderContainer>
    </SectionHeaderStyled>
  );
};

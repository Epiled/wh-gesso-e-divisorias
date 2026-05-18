import styled from "styled-components";

export const HomeAchievements = styled.div`
  display: flex;
  justify-content: center;
  padding: 10rem;
  background: var(--lighter);
`

export const HomeAchievementsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  width: 100%;
  max-width: 110rem;
  text-align: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

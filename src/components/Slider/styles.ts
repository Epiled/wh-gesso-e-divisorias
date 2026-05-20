import styled from "styled-components";

export const SliderStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: var(--color-primary);
  padding: 4rem 0;
`

export const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`

export const SliderTitle = styled.h2`
  font-size: 3.6rem;
  font-family: var(--montserrat);
  color: var(--lighter);
`

export const SliderText = styled.p`
  font-size: 2.4rem;
  font-family: var(--nunita);
  color: var(--lighter);
`

export const SliderContainer = styled.div`
  width: 100%;
  height: 30rem;
  overflow: hidden;

  /* Cria o espaço entre os slides */
  .slick-slide > div {
    margin: 0 0.5rem; /* Altere o 15px para o tamanho do gap desejado */

  }

  /* Compensa a margem nas bordas para o carrossel não ficar desalinhado */
  .slick-list {
    margin: 0 -5px;
  }
`

export const SliderFrame = styled.div`
  width: 25rem;
  height: 30rem;
`

export const SliderImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`

import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: auto; 
  overflow: hidden;

  .slick-slide > div {
    margin: 0 1rem; 
  }

  .slick-list {
    margin: 0 -1rem;
  }
`

export const SliderFrame = styled.div`
  height: 25rem; 
  border-radius: 1.5rem;
  overflow: hidden;
`

export const SliderImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
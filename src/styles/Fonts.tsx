import { createGlobalStyle } from "styled-components";

import MontserratVariable from "assets/fonts/Montserrat/Montserrat-Variable.ttf";
import NunitoSansVariable from "assets/fonts/Nunito-Sans/NunitoSans-Variable.ttf";

const Fonts: React.FC = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200 1000; 
    font-stretch: 75% 125%; 
    src: url(${MontserratVariable}) format('truetype'); 
    font-display: swap;
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 200 1000; 
    font-stretch: 75% 125%; 
    src: url(${NunitoSansVariable}) format('truetype'); 
    font-display: swap;
  }
`;

export default Fonts;

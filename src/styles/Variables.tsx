import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
  :root {
    --color-primary: #195394;
    --color-primary-hover: #0d3b70;

    --color-primary-dark: #102A47;
    --color-primary-dark-hover: #051930;

    --color-intermediary: #2C4663;
    --color-intermediary-hover: #1c2d41;

    --color-text-primary: #202020;
    --color-text-alternative: #f2f2f2;

    --color-neutral-white: #ffffff;

    --lighter: #ffffff;

    --montserrat: "Montserrat", "Arial", sans-serif;
    --nunita: "Nunita Sans", "Arial", sans-serif;

    color-scheme: light dark;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (prefers-color-scheme: dark) {
    :root {

    }
  }
`;

export default Variables;

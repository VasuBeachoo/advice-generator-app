import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Light-Cyan: hsl(193, 38%, 86%);
    --Neon-Green: hsl(150, 100%, 66%);
    --Grayish-Blue: hsl(217, 19%, 38%);
    --Dark-Grayish-Blue: hsl(217, 19%, 24%);
    --Dark-Blue: hsl(218, 23%, 16%);

    --Font-Manrope: "Manrope", sans-serif;
  }

  * {
    box-sizing: border-box;
    font-family: var(--Font-Manrope);
  }

  body {
    background-color: var(--Dark-Blue);
    margin: 0;
  }
`;

export default GlobalStyle;

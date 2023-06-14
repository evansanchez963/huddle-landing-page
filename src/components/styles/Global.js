import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
   
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: "Poppins", sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.font};
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    margin: 0;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;

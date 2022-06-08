import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: ${(props) => props.theme.fonts.body};
    height: 100%;
    width: 100%;
    
  }

  h1,h2,h3,h4 {
    font-family: ${(props) => props.theme.fonts.heading};
  }
  
`;

export default GlobalStyle;

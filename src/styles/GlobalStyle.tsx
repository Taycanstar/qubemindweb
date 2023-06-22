import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }


  li {
    margin: 0;
    padding:0;
  }

  
  a {
  text-decoration: none;
}
  /* Add more global styles as needed */
`;

export default GlobalStyle;

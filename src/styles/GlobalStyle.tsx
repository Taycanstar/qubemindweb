import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  * { box-sizing: border-box; }


  li {
    margin: 0;
    padding:0;
  }

  
  a {
  text-decoration: none;
}
  .light-theme{
    --bg: #fff;
    --font: black;
  }

  .dark-theme {
    --bg: rgba(24,25,26,1);
    --font: white;
  }
`;

export default GlobalStyle;

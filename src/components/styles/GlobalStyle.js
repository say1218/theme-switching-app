import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
          background: black;
          color: white;
    }

    p{
       color: blue;
       padding: 2rem;
       font-size: 1rem;
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin: 0%;
    padding: 0%;
    /* background-color:#373b3e; */
    /* color: #fff; */
    box-sizing: border-box;
}
::selection{
    background:rgb(25, 103, 210);
    color:white;
}
`;

export default GlobalStyle;

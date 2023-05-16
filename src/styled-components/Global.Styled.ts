import { createGlobalStyle } from "styled-components"


export const GlobalStyled = createGlobalStyle`

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background-image: url("./assets/home/background-home-mobile.jpg");
        background-repeat: no-repeat;
        background-size: 100% 667px;
        width: 100vw;
        padding: 24px;
    }
`


import { createGlobalStyle } from "styled-components"


export const GlobalStyled = createGlobalStyle<any>`

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background-image: url(${({backgroundImage}) => backgroundImage});
        background-size: 100% 667px;
        width: 100vw;
        background-repeat: no-repeat;
        /* padding: 24px; */
    }
`


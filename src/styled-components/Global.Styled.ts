import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle<any>`

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background-image: url(${({ backgroundImages }) =>
          backgroundImages.mobile});
        background-size: 100% 100%;
        width: 100vw;
        height: 100vh;
        background-repeat: no-repeat;

        @media (min-width: 768px) {
            background-image: url(${({ backgroundImages }) =>
              backgroundImages.tablet});
        }

        @media (min-width: 1440px) {
            background-image: url(${({ backgroundImages }) =>
              backgroundImages.desktop});
            overflow: hidden;
        }
    }
`;

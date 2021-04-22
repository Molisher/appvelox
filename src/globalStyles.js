import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 html{
        height: 100%;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, *::after, *::before{
        box-sizing: inherit;
    }

    body{
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;
    }

    a{
        color: #50CAFF;
    }

    button{
        background-color: inherit;
        border: none;
        outline: none;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6{
        margin: 0;
        font-weight: 400;
        font-size: 1rem;
    }

    #root{
        height: 100%;
    }
    p{
        margin: 0;
    }
    ul{ 
        padding: 0;
        margin: 0;
    }
`;

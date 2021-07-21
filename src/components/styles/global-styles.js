import React  from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle  = (  )=> {
    return (
            <Global/>
    )

}

export default GlobalStyle ;

const Global = createGlobalStyle`

    html{
        font-size: 62.5%;
        box-sizing: border-box;
    }
    &, &::before, &::after{
        box-sizing: inherit;

    }
    body{
        font-size: 1.6rem;
        line-height: 2;
        font-family: 'Roboto', sans-serif;
    }h1,h2,h3{
        margin: 0;
        line-height: 1.5;
    }
    h1,h2{
        text-align: center;
        font-weight: 300;
    }
    img{
        max-width: 100%;
    }

`;



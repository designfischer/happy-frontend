import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        color: white;
        background: #ebf2f5;
    }

    body, input, button, textarea {
        font: 600 18px Nunito, sans-serif;    
    }

    button {
        color: #333333;
    }

`

export default GlobalStyle
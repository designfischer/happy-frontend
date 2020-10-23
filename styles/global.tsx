import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,600;0,700;1,600&display=swap');

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
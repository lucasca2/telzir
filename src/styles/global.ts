import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none; 
        box-sizing: border-box;
    }  
    
    html { 
        font-size: 10px;
        font-family: 'Roboto', sans-serif;
    } 
    
    body {
        overflow: hidden;
    }
    
    svg {
        stroke-width: 1.5px;
    }   
      
    main {
        height: 100vh;
        overflow: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column; 
    }
    
    input, button, textarea {
        font-family: 'Montserrat', sans-serif;
    }
    
    button {
        border: none;
        background: none;
    }
`;

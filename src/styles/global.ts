import {createGlobalStyle} from 'styled-components'




export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;

  }

  body{
    background-color:${props => props.theme.colors.background};
    transition: background-color 1s;
  }

  body::-webkit-scrollbar {
    width: 9px;               /* width of the entire scrollbar */
  }
  
  body::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background}
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: #842524;    /* color of the scroll thumb */
    border-radius: 10px;       /* roundness of the scroll thumb */
    border: 3px solid #842524;  /* creates padding around scroll thumb */
  }

`
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

`
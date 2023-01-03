import styled from "styled-components";


export const Container = styled.div`

   padding-top:4rem;

    h1{
        font-family: ${props => props.theme.fonts.fontFamily};
        text-align:center;  
        color:${props => props.theme.colors.text}
    }

    h1 span{
        color:${props => props.theme.colors.text}
    }
    
    margin-bottom:2rem;

    .Cards-wrapper {
       margin-top:3rem;
       display:grid;
       grid-template-columns: repeat(auto-fit, 300px);
       gap:2rem;
       justify-content:center;
    }

    .arrow {
        height:70px;
        width:70px;
        border-radius:50%;
        position:fixed;
        bottom:0;
        right:0; 
    }
  

`
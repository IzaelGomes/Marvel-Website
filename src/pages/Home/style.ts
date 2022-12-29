import styled from "styled-components";
import marvelCapa from "../../assets/capa.jpg"

export const HomeContainer = styled.div`
    height:100vh;

    #main-gif{
        height:100vh;
        width:100%;
        background: url(${marvelCapa}) no-repeat;
        background-size:cover;  
        display:flex;
        align-items:center;
        justify-content:center;
    }
    

    #main-text h1{
        color:${props => props.theme.colors.text};
        max-width:54rem;
        font-size:4rem;
        text-align:center;
        font-family: 'Rubik Distressed', cursive;
    }

    #main-text h1 span{
        color:${props => props.theme.colors.text2};
        font-size:2.6rem;
        font-weight:bold;
    }

`
import styled from "styled-components";
import fundo from '../../assets/spider-man.jpg'


export const Wrapper = styled.div`
    height: 100vh;
    background-color: #040404;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    
    img{
        height: 80%;
    }

    @media(max-width:898px){
        img{
          height: 40%;
        }
    }
    
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:350px;
        height: 25%; 
        margin: 10px;
    }

 
    form input {
        border: 4px solid transparent;
    }

    form input:hover{
        border-color: #842524;
        
    }

    form button{
        width: 120px;
        border-radius: 5px;
        border:none;
        padding: 8px;
        margin:0 auto;
        background-color: #2e3432;
        color:#fff;
        transition: 0.8s;
        cursor:pointer;
        font-family: ${props => props.theme.fonts.fontFamily}
    
    }

    form button:hover{
        background-color: #842524;
    }

    form span{
        text-align: center;
        padding-top:1rem;
        font-family: ${props => props.theme.fonts.fontFamily}
    }

    form span a{
        color: #842524;
        margin-left: 1rem;
    }

`
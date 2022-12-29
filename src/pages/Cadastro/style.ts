import styled from 'styled-components'
import fundo from '../../assets/Fundo.jpg'

export const Container = styled.main`
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background:url(${fundo});
    background-size:cover;

    form{
        display: flex;
        margin:10px;
        flex-direction: column;
        width: 400px;
        max-width: 500px;
        padding: 40px;
        border-radius: 15px;
        opacity: 0.9;
        background-color: #000;
        
    }

   
    
    form img{
        width: 80%;
        margin:0 auto;
        padding-bottom:10px;        
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
        font-family: ${props => props.theme.fonts.fontFamily};

       
    }

    form button:hover{
        background-color: #842524;
    }

   
`
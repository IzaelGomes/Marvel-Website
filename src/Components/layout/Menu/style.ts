import styled from "styled-components";


export const Aside = styled.aside`

    #header-menu{
        background: ${props => props.theme.colors.background};
        height:2.7rem;
        width:100%;
        position:fixed;
        display:flex;
        justify-content: space-between;
        z-index:2;
    }

    #container{
        background-color: ${props => props.theme.colors.background};
        height: 100vh;
        max-width: 370px;
        padding: 10px;
        color:#fff;
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        top:0;
        position: fixed;
        z-index:2;
  
    header {
        display: flex;
        justify-content: flex-end;
        padding: 3px;      
    } 

    footer{
        display: flex;
        align-items: center;
        font-family: ${props => props.theme.fonts.fontFamily};  
        
    }

    footer img{
        width: 70px;
    }

    }
`

export const MenuOptions = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     ul {
        list-style: none;
     }

     ul li{
        padding-bottom:24px ;
        font-size:1.5rem;
        cursor: pointer;
     }

     ul li a{
        text-decoration:none;
        font-family: ${props => props.theme.fonts.fontFamily};
        color:${props => props.theme.colors.text2};
     }
`



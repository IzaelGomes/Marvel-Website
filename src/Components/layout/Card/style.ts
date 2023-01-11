import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
`

export const ContainerCard = styled.div`
   
    margin-bottom:2rem;
    display:flex;
    flex-direction:column;
    border-radius:8px;
    margin-bottom:2rem;
    transition: 0.2s;
    position:relative;

    h2{
        color:${props => props.theme.colors.text2}
    }
   
    :hover{
        margin-top:-8px;
    }
   
    h2{
        text-align:center;
    }
 
     img{
        max-width:300px;
        height:300px;
        border-radius:8px;
        object-fit:cover;
    }

    .img-container{
        position:relative;
    }

    .layer{
        position:absolute;
        border-radius:8px;
        width:100%;
        top:0;
        height:100%;
        opacity:0.8;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .layer-content{
        display: flex;
        gap:2rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        opacity:0;
    }
    
    .layer-content:hover{
        width: 100%;
        height: 100%;
        opacity:1;
    }

    .img-container .layer:hover{
        background-color:${props => props.theme.colors.primary};
        height:100%;
    }
    
    .modal-content{
        z-index:2;
        position:fixed;
        top: 0; 
        right: 50%;
      
        
    }


 `
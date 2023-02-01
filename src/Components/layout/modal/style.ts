import styled from "styled-components";

export const ModalSection = styled.section`
  
  z-index: 999;
  margin: 30px auto;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  .Modalcontent h1{
    text-align:center
  }
`;

export const ModalContainer = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: gray;
  border-top: 5px solid #842524;
  border-bottom: 5px solid #842524;
  width: 400px;
  height: 400px;
  display: flex;
  overflow:auto;
  flex-direction: column;

  p{
    font-size:18px;
  }

  ::-webkit-scrollbar  {
    width: 9px;               /* width of the entire scrollbar */
  }
  
  ::-webkit-scrollbar-track  {
    background: ${props => props.theme.colors.background}
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #842524;    /* color of the scroll thumb */
    border-radius: 10px;       /* roundness of the scroll thumb */
    border: 3px solid #842524;  /* creates padding around scroll thumb */
  }
`;

export const IconClose = styled.div`
  cursor: pointer;
  padding: 10px;
  align-self: end;

  & > svg {
    font-size: 20pt;
  }
`;
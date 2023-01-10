import styled from "styled-components";

export const ModalSection = styled.section`
  color: white;
  z-index: 999;
  margin: 0 auto;
  position: fixed;
  height: 100vh;
  width: 100vw;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  padding: 10px;
  border-radius: 20px;
  background-color: gray;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

export const IconClose = styled.div`
  cursor: pointer;
  padding: 20px;
  align-self: end;

  & > svg {
    font-size: 20pt;
  }
`;
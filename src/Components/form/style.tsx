import styled from "styled-components";

export const InputForm = styled.input`
        padding : 10px;
        border-radius: 10px;
        outline: none;
        border:none;
        margin-bottom:15px;
        transition: 0.2s border;

        ::placeholder {
                font-family: ${props => props.theme.fonts.fontFamily};
        }
        
   
`
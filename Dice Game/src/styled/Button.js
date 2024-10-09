import styled from "styled-components";

export const Button = styled.button`
    min-width:220px;
    background-color: ${((props) => props.$white ? 'white' : 'black')};
    color: ${((props) => !props.$white ? 'white' : 'black')};
    border-radius: 5px;
    padding:10px 18px;
    border: 1px solid black;
    font-size: 16px;
    transition:0.3s background-color ease-in-out;
    
    &:hover{
        cursor: pointer;
        background-color: ${((props) => !props.$white ? 'white' : 'black')};
        border: 1px solid black;
        color: ${((props) => props.$white ? 'white' : 'black')};
        transition:0.3s background-color ease-in-out;
    }
`
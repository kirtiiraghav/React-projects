import React from 'react'
import styled from 'styled-components'

export default function Button({label, setSelectedBtn}) {
    return (
        <RedButton onClick={()=> setSelectedBtn(label.toLowerCase())}>
            {label}
        </RedButton>
    )
}

const RedButton = styled.button`
    background-color: #FF4343;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 6px 12px;

    &:hover{
        cursor: pointer;
        background-color: #FF0909;;
    }
`
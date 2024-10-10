import React from 'react'
import styled from 'styled-components'

export default function SearchInputField() {
    return (
        <SearchField placeholder='Search Food' />
    )
}

const SearchField = styled.input`
    width: 285px;
    background-color:#323334 ;
    color: white;
    border:1px solid #FF0909;
    outline:1px solid #FF0909;
    padding: 8px;
    border-radius: 4px;

    &::placeholder{
        color: white;
    }
`

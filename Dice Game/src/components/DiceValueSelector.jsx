import React, { useState } from 'react'
import styled from 'styled-components'

export default function DiceValueSelector() {
    const [selectedNumber, setSelectedNumber] = useState()
    const diceArray = [1, 2, 3, 4, 5, 6]
    
    return (
        <SelectorContainer>
            <div>
                {
                    diceArray.map((number, i) => {
                        return <Box selected={selectedNumber === number} onClick={() => setSelectedNumber(number)} key={i}>{number}</Box>
                    })
                }
            </div>
            <p>Select Number</p>
        </SelectorContainer>
    )
}

const SelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    div{
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 500;
        margin-top: 24px;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 2px solid black;
    font-size: 24px;
    font-weight: 700;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: ${(props)=> props.selected ? 'black' : 'white'};
    color: ${(props)=> !props.selected ? 'black' : 'white'};

    &:hover{
        cursor: pointer;
    }

`

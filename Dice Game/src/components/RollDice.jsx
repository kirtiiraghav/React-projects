import React, { useState } from 'react'
import styled from 'styled-components'

export default function RollDice() {
    const [rollDice, setRollDice] = useState(1)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rollDiceFunction = () => {
        const randomNumber = generateRandomNumber(1, 6)
        setRollDice(randomNumber)
    }

    return (
        <Dice>
            <div onClick={rollDiceFunction}>
                <img src={`/public/images/dice_${rollDice}.svg`} alt="dice" />
            </div>
            <p>Click on Dice to roll</p>
        </Dice>
    )
}

const Dice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        &:hover{
            cursor: pointer;
        }
    }
`

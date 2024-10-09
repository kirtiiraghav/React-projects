import styled from 'styled-components'
import DiceValueSelector from './DiceValueSelector'
import ScoreContainer from './ScoreContainer'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button } from '../styled/Button'
import GameRules from './GameRules'

export default function GamePage() {
    const [selectedNumber, setSelectedNumber] = useState()
    const [rollDice, setRollDice] = useState(1)
    const [score, setScore] = useState(0)
    const [error, setError] = useState('')
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rollDiceFunction = () => {
        if (!selectedNumber) {
            setError('You have not selected any number')
            return
        }

        const randomNumber = generateRandomNumber(1, 6)
        setRollDice(randomNumber)

        if (randomNumber === selectedNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }

        setSelectedNumber(null)
    }

    return (
        <Main>
            <div className='top-section'>
                <ScoreContainer score={score} />
                <DiceValueSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>
            <RollDice rollDice={rollDice} rollDiceFunction={rollDiceFunction} />
            <div className='buttons'>
                <Button $white onClick={() => setScore(0)}>Reset Score</Button>
                <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? 'Hide' : 'Show'} rules</Button>
            </div>
            {showRules ? <GameRules /> : null}
        </Main >
    )
}

const Main = styled.main`
    padding:24px ;
    
    .top-section{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        margin-top: 24px;
    }

    `

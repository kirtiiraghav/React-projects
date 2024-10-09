import styled from 'styled-components'

export default function RollDice({ rollDice, rollDiceFunction }) {
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
    margin-top: 48px;

    div{
        &:hover{
            cursor: pointer;
        }
    }
`

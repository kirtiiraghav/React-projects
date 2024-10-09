import styled from 'styled-components'
import DiceValueSelector from './DiceValueSelector'
import ScoreContainer from './ScoreContainer'
import RollDice from './RollDice'

export default function GamePage() {
    return (
        <Main>
            <div>
                <ScoreContainer />
                <DiceValueSelector />
            </div>
            <RollDice />
        </Main>
    )
}

const Main = styled.main`
    max-width: 1000px;
    margin-inline:auto;
    padding:24px ;

    div{
        display: flex;
        justify-content: space-between;
    }

    `

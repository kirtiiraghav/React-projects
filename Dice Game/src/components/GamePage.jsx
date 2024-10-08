import styled from 'styled-components'
import DiceValueSelector from './DiceValueSelector'
import ScoreContainer from './ScoreContainer'

export default function GamePage() {
    return (
        <Main>
            <ScoreContainer />
            <DiceValueSelector />
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 1000px;
    margin-inline:auto;
    padding:24px ;
`

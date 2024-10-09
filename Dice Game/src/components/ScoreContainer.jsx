import styled from 'styled-components'

export default function ScoreContainer({ score }) {
    return (
        <TotalScore>
            <h1>{score}</h1>
            <p>Total score</p>
        </TotalScore>
    )
}

const TotalScore = styled.div`
    max-width: 200px;
    text-align: center;

    h1{
        font-size: 80px;
        line-height: 100px;
    }

    p{
        font-size: 24px;
        font-weight: 500;
    }
`
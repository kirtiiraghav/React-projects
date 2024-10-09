import { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function ScoreContainer() {
    return (
        <TotalScore>
            <h1>0</h1>
            <p>Total score</p>
        </TotalScore>
    )
}

const TotalScore = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    h1{
        font-size: 80px;
        line-height: 80px;
        font-weight: 400;
    }

    p{
        font-size: 24px;
        font-weight: 500;
    }
`
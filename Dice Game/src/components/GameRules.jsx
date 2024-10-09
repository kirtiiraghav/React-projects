import React from 'react'
import styled from 'styled-components'

export default function GameRules() {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>After you click on dice if selected number is equal to dice number you will get same point as dice otherwise 2 points will be deducted from the total score</p>
            </div>
        </RulesContainer>
    )
}

const RulesContainer = styled.div`
    background-color: #FBF1F1;
    max-width: 794px;
    margin: 64px auto;
    padding: 20px;

    h2{
        font-size: 24px;
    }

    div{
        margin-top: 24px;
    }

`

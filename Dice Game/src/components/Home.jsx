import dice from '../../public/images/dices 1.svg'
import styled from 'styled-components'
import { Button } from '../styled/Button'

export default function Home({ toggleBtn }) {
    return (
        <Container>
            <div className='dice-img'>
                <img src={dice} alt="dice" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={toggleBtn}>Play Now</Button>
            </div>
        </Container>
    )
}

const Container = styled.section`
    max-width: 1182px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .dice-img{
        max-width: 600px;
    }

    .content{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;

        h1{
            font-size:96px ;
            white-space: nowrap;
        }
    }
`
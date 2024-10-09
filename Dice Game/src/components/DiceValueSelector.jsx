import styled from 'styled-components'

export default function DiceValueSelector({ selectedNumber, setSelectedNumber, error, setError }) {

    const diceArray = [1, 2, 3, 4, 5, 6]

    return (
        <SelectorContainer>
            <p className='error'>{error}</p>
            <div className='dice-box'>
                {
                    diceArray.map((number, i) => {
                        return <Box selected={selectedNumber === number} onClick={() => {
                            setError('')
                            setSelectedNumber(number)
                        }} key={i}>{number}</Box>
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
    align-items: end;

    .error{
        color: red;
    }

    .dice-box{
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
    place-items:center;
    background-color: ${(props) => props.selected ? 'black' : 'white'};
    color: ${(props) => !props.selected ? 'black' : 'white'};

    &:hover{
        cursor: pointer;
    }

`

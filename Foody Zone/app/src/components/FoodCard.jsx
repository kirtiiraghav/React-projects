import styled from 'styled-components'
import Button from './Button'
import { BASE_URL } from './Hero';


export default function FoodCard({ image, name, type, price, desc }) {
    console.log(type);
    return (
        <Card>
            <div className='image-container'>
                <img src={BASE_URL + image} alt="food image" />
            </div>
            <div className='food-description'>
                <p className='food-name'>{name}</p>
                <p className='text'>{desc}</p>
                <div className='price-btn'>
                    <Button label={`$${price}.00`} />
                </div>
            </div>
        </Card>
    )
}

const Card = styled.div`
    max-width: 340px;
    color: white;
    display: flex;
    align-items: center;
    gap: 17px;
    background-color: rgba(99, 97, 97, 0.15);  
    backdrop-filter: blur(12px);
    border: 1px solid #808B86;
    border-radius: 24px;
    padding-block: 10px;
    padding-inline:4px;

    .food-name{
        font-weight: 600;
    }

    .text{
        font-size: 14px;
        margin-block:8px;
    }

    .price-btn{
        text-align: right;
        margin-top: 18px;
        margin-bottom: 8px;
        margin-right: 4px;
    }

`

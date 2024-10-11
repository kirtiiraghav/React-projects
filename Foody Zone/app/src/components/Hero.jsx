import styled from 'styled-components'
import FoodCard from './FoodCard'
import { useEffect, useState } from 'react'

export const BASE_URL = 'http://localhost:9000'

export default function Hero({ data, setData, query, selectedBtn }) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((fetchedData) => {
                const formattedFoodData = fetchedData.map((foodData) => ({
                    image: foodData.image,
                    name: foodData.name,
                    price: foodData.price,
                    desc: foodData.text,
                    type: foodData.type
                }))
                setData(formattedFoodData);
                setLoading(false)
            }).catch((err) => {
                setError(`Couldn't fetch data`)
                setLoading(false)
            })

    }, [])

    if (loading) return <p>Loading</p>
    if (error) return <p>{error}</p>

    return (
        <HeroSection>
            <CardsContainer>
                {
                    data?.filter(({ name, type }) => {
                        const matchesCategory = selectedBtn === 'all' || type.toLowerCase() === selectedBtn;
                        const matchesQuery = name.toLowerCase().includes(query.toLowerCase());

                        // Return true only if both the category and search query match
                        return matchesCategory && matchesQuery;
                    }).map((foodItem) => {
                        return <FoodCard key={foodItem.name}
                            image={foodItem.image}
                            name={foodItem.name}
                            price={foodItem.price}
                            desc={foodItem.desc}
                            type={foodItem.type} />
                    })
                }
            </CardsContainer>
        </HeroSection>
    )
}

const HeroSection = styled.section`
    background-image: url('/images/background.svg');
    background-size: cover;
    min-height: calc(100vh - 211.33px);
    display: flex;
    align-items: center;
    padding: 25px;
    justify-content: center;
    
    @media (max-width: 600px) {
        min-height: calc(100vh - 222px);
    }
`

const CardsContainer = styled.div`
    display: flex;
    row-gap: 20px;
    column-gap: 32px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

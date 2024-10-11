import styled from "styled-components"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { useState } from "react"

export default function App() {
    const [data, setData] = useState()
    const [query, setQuery] = useState('')
    const [selectedBtn, setSelectedBtn] = useState('all')
    return (
        <MainContainer>
            <Header selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} setQuery={setQuery} />
            <Hero selectedBtn={selectedBtn} data={data} setData={setData} query={query} />
        </MainContainer>
    )
}

const MainContainer = styled.main`
    max-width: 1440px;
    margin: 0 auto;
`



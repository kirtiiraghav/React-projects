import styled from "styled-components"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { useState } from "react"

export default function App() {
    const [data, setData] = useState()
    const [query, setQuery] = useState('')
    return (
        <MainContainer>
            <Header data={data} setData={setData} setQuery={setQuery} />
            <Hero data={data} setData={setData} query={query} />
        </MainContainer>
    )
}

const MainContainer = styled.main`
    max-width: 1440px;
    margin: 0 auto;
`



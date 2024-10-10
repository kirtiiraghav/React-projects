import styled from "styled-components"
import Header from "./components/Header"
import Hero from "./components/Hero"

export default function App() {
    return (
        <MainContainer>
            <Header />
            <Hero />
        </MainContainer>
    )
}

const MainContainer = styled.main`
    max-width: 1440px;
    margin: 0 auto;
`



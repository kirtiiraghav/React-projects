import { useState } from 'react'
import Home from './components/Home'
import GamePage from './components/GamePage'

function App() {
    const [isStateGame, setIsStartGame] = useState(false)
    const togglePlayButton = () => {
        setIsStartGame((prevState) => !prevState)
    }

    return (
        <>
            {isStateGame ? <GamePage /> : <Home toggleBtn = {togglePlayButton} />}
        </>
    )
}

export default App


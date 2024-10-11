import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background-color: #323334;
        color: white;
    }
    
    button{
        color: white;
    }
`

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyle />
        <App />
    </StrictMode>,
)

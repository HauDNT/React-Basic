import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/GlobalStyles/GlobalStyles.scss';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

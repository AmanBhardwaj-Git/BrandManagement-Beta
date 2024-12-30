import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/animations.css'; // Change this line
import './index.css';
import App from './App';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

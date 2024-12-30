import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'animate.css/animate.min.css';  // Update this line
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

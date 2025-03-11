import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StepProvider from './context/StepContext' // StepProvider ko import karein

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StepProvider>
      <App />
    </StepProvider>
  </StrictMode>
);

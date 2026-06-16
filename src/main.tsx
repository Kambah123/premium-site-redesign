import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { InquiryProvider } from './context/InquiryContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <InquiryProvider>
        <App />
      </InquiryProvider>
    </BrowserRouter>
  </StrictMode>,
)

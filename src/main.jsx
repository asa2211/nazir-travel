import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Analytics/>
      <SpeedInsights/>
    </BrowserRouter>
  </React.StrictMode>,
)
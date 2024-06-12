import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx' // Envolver o App com chaves por ser um named export

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

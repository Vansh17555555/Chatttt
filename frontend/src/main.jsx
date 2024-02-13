import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { UserIdProvider } from './context/useridcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserIdProvider>
    <AuthContextProvider>
    <App />
    
    </AuthContextProvider>
    </UserIdProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

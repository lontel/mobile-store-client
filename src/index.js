import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { MessageProviderWrapper } from './contexts/userMessage.context'
import { AuthProviderWrapper } from './contexts/auth.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <MessageProviderWrapper>
          <App />
        </MessageProviderWrapper>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
)


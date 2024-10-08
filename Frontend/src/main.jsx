import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProfileMain from './components/Profile/UserProfile/ProfileMain.jsx'
import AdminApp from './components/Profile/AdminProfile/AdminApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

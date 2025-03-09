import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Navbar/>
    <App />
    <Footer/>
    </Router>
  </StrictMode>,
)

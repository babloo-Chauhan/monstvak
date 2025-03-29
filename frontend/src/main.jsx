
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './pages/Navbar.jsx';
import Footer from './pages/Footer.jsx';
import { StrictMode } from 'react';
import { CartProvider } from './context/CartContext.jsx';
import { ThemeProvider } from "@material-tailwind/react";


createRoot(document.getElementById('root')).render(

<StrictMode>
  <ThemeProvider>
  <CartProvider>
  <Router>
  <Navbar/>
  <App/>
  <Footer/>
  </Router>
  </CartProvider>
  </ThemeProvider>
</StrictMode>

  
)

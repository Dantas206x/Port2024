

import './App.css'

import Navbar from './componentes/Navbar'
import Home from './componentes/Home'
import Sobre from './componentes/Sobre'
import Contato from './componentes/Contato'
import Exp from './componentes/Exp'
import FraseAleatoria from './componentes/FraseAleatoria'
import whats from "./componentes/assets/whats.png"
import Projetos from './componentes/Projetos'
import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from "./componentes/Footer";




function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className='bg-tertiary'>
        <Home />
        <div className={` max-[1024px]:hidden fixed right-5 bottom-5 rounded-full delay-100 hover:scale-110 transition-all duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
          <a href='https://wa.me/5511983085134?text=Ol%C3%A1,%20Como%20vai?%0AVim%20atrav%C3%A9s%20do%20seu%20portifolio%20para%20contato.' target='blank'>
            <img src={whats} alt="WhatsApp" className="w-16 h-16" />
          </a>
        </div>
      </div>
      <div className='pt-20'>
      <FraseAleatoria />
      </div>
      <Sobre />
      <Exp />
      <Projetos />
      <div className='bg-tertiary'>
      <Contato />
      <Footer />
      </div>   
      </BrowserRouter>
  )
}

export default App

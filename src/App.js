import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Development from './components/Development';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Header from './components/Header';
import Integer from './components/Integer';
import SuccessGuides from './components/Success';
import Team from './components/Team';
import VipeStudio from './components/VipeStudio';
import WordpressPartner from './components/WordpressPartner';
import React, { useState, useEffect } from 'react';
import BackToTop from './assets/images/png/back-to-top.png';
import { Preloader } from './components/IconImg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1000,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
   const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);

  return (

 <div>
      {screenLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
            <>
              <div className='overflow-x-hidden'>
                <Header />
                <Featured />
                <Integer />
                <VipeStudio />
                <WordpressPartner />
                <Development />
                <Team />
                <SuccessGuides />
                <Footer />
              </div>
              <div>
                <img onClick={() => top()} src={BackToTop} alt='BackToTop' className={backToTop ? "back_to_top max-w-[45px] z-[4]" : "d-none"} />
              </div>
            </>
        </BrowserRouter>
      )}
    </div>




   
  );
}

export default App;

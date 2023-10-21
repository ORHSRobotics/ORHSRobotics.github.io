import React, { useEffect, useState } from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage } from './Components/About/AboutPage';
import { HomePage } from './Components/Home/HomePage';
import { TheGame } from './Components/TheGame/TheGame';
import { SponsorsPage } from './Components/Sponsors/SponsorPage';
import { PrivacyPage } from './Components/Privacy/PrivacyPage';
import { Footer } from './Components/Footer/Footer';
import { TermsOfService } from './Components/Privacy/Documents/TermsOfService'
import { PrivacyPolicy } from './Components/Privacy/Documents/PrivacyPolicy'
import "@fontsource/montserrat";
import { Helmet } from 'react-helmet';
import axios from 'axios';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [actualContent, setActualContent] = useState(null)
  useEffect(() => {
    setActualContent(
      <>
        <Helmet>
          <title>ORHS Robotics</title>
          <meta name="description" content="A website for Oak Ridge Robotics"/>
          <meta name="theme-color" content="#252b32" />
          <meta name="msapplication-navbutton-color" content="#252b32" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#252b32" />
        </Helmet>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/Home' element={<HomePage />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/TheGame' element={<TheGame />} />
            <Route path='/Sponsors' element={<SponsorsPage />} />
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }, [])
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Mobi|Android/i.test(userAgent);
    if (isMobile) {
      document.body.style.overscrollBehavior = 'none';
      document.body.style.overflowX = 'hidden';
      document.body.style.position = 'relative';
    }
  }, []);

  useEffect(() => {
    if (actualContent != null) {
      setIsLoading(false);
    }
  })



  if (isLoading) {
    return <div></div>;
  }





  return (
    actualContent
  );
}

export default App;

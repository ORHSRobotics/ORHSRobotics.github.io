
import React, { useEffect, useState } from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Mobi|Android/i.test(userAgent);
    if (isMobile) {
      document.body.style.overscrollBehavior = 'none';
      document.body.style.overflowX = 'hidden';
      document.body.style.position = 'relative';
    }
  }, []);



  return (
    <>
      <Helmet>
        <title>ORHS Robotics</title>
        <meta name="theme-color" content="#252b32" />
        <meta name="msapplication-navbutton-color" content="#252b32" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#252b32" />
      </Helmet>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact component={HomePage()} element={HomePage()} />
          <Route path='/Home' component={HomePage()} element={HomePage()} />
          <Route path='/About/AboutUs' component={AboutPage()} element={AboutPage()} />
          <Route path='/TheGame' component={TheGame()} element={TheGame()} />
          <Route path='/Sponsorship' component={SponsorsPage()} element={SponsorsPage()} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>

  );
}

export default App
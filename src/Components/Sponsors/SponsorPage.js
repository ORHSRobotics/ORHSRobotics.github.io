import React, { useState, useEffect } from 'react';
import {
  PageHeader,
  Text,
  Container,
  ActivitiesHeader,
  SponsorDescription,
  MainContent,
  HeartPicture,
  SponsorSupportText
} from './AboutPageElements';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sponsorsData } from './sponsorsData';
import BlueHeart from './../../Assets/Blue Heart O1.png'


export const SponsorsPage = () => {
  const [isDots, setIsDots] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [settings, setSettings] = useState({
    dots: true, // isDots, assuming you have it defined somewhere
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 1000 ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    pauseOnHover: true,
    centerPadding: window.innerWidth > 1000 ? '4vw' : '39vw',
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      const newSettings = {
        ...settings,
        slidesToShow: window.innerWidth < 1000 ? 1 : 3,
        centerPadding: window.innerWidth > 1000 ? '4vw' : '39vw',
      };

      setSettings(newSettings);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [settings]);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Mobi|Android/i.test(userAgent);
    setIsDots(!isMobile);
  }, []);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Container>
      <PageHeader id="OurSponsors">Sponsors</PageHeader>
      <div style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Slider {...settings}>
          {sponsorsData.map((sponsor, index) => (
            <div key={index}>
              <div style={{
                flexDirection: 'row',
                borderRadius: '5px',
                width: '25vw',
                height: '60vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <div style={{
                  flexDirection: 'row',
                  display: 'flex',
                  width: '25vw',
                  height: '35vh',
                  flexDirection: 'column',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  justifyItems: 'center',
                  justifySelf: 'center',
                  textAlign: 'center'
                }}>
                  <img src={sponsor.logo} alt={sponsor.name} style={{
                    width: window.innerWidth > 1000 ? '16vw' : '30vw', height: 'auto', alignItems: 'center', justifyContent: 'center',
                    alignSelf: 'center',
                    textAlign: 'center'
                  }} />
                </div>


                <h3 style={{ fontFamily: "Montserrat" }}>{sponsor.name}</h3>
                <SponsorDescription style={{ fontFamily: "Montserrat" }}>{sponsor.description}</SponsorDescription>
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer" style={{
                  backgroundColor: '#007BFF',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s',
                  fontFamily: "Montserrat"
                }}
                  onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
                  onMouseOut={e => e.target.style.backgroundColor = '#007BFF'}
                >Visit</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <MainContent id="SupportUs">
        <div style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: '40%', display:'flex', flexDirection: 'column' }}>
          <Text>Interested in becoming a sponsor?</Text>

          <SponsorSupportText>
            We at Oak Ridge Robotics are dedicated to serving our sponsors with the utmost loyalty, 
            whether its a spreading the news about a spirit night, or winning competitions with their support, 
            we treat our sponsors with the utmost respsect.
            </SponsorSupportText>
        </div>


        {submitted && <Text style={{ color: 'green' }}>Form submitted successfully!</Text>}
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', width: '40vw' }}>
          <div style={{ backgroundColor: '#f0f0f0', borderRadius: '5px', padding: '40px', margin: '10px', alignItems: "center", justifyContent: 'center', maxWidth: '500px', width: '80%' }}>
            <label style={{ display: 'block', marginBottom: '15px' }}>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', borderRadius: '5px', padding: '10px 0px 10px 0px', borderWidth: '1px' }}
              />
            </label>
            <label style={{ display: 'block', marginBottom: '15px' }}>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', borderRadius: '5px', padding: '10px 0px 10px 0px', borderWidth: '1px' }}
              />
            </label>
            <label style={{ display: 'block', marginBottom: '15px' }}>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{ width: '100%', borderRadius: '5px', padding: '10px 0px 10px 0px' }}
              />
            </label>
            <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px' }}>Submit</button>
          </div>
        </form>
      </MainContent>
      <PageHeader></PageHeader>
    </Container>
  )
}

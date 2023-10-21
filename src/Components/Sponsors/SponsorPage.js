import React, { useState, useEffect } from 'react';
import {
  PageHeader,
  Text,
  Container,
  ActivitiesHeader,
  SponsorDescription,
  MainContent,
  HeartPicture
} from './AboutPageElements';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sponsorsData } from './sponsorsData';
import BlueHeart from './../../Assets/Blue Heart O1.png'


export const SponsorsPage = () => {
  const [isDots, setIsDots] = useState(true);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Mobi|Android/i.test(userAgent);
    setIsDots(!isMobile);
  }, []);

  const settings = {
    dots: isDots,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Modify to change to 1 based on screen width
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    pauseOnHover: true,
    centerPadding: '4vw', // Modify to scale with screen width
  };

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
      <PageHeader>Sponsors</PageHeader>
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
                    width: '16vw', height: 'auto', alignItems: 'center', justifyContent: 'center',
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
      <MainContent>
        <div style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: '50%', display:'flex', flexDirection: 'column' }}>
          <Text>Interested in becoming a sponsor?</Text>
          <HeartPicture src={BlueHeart}/>
        </div>


        {submitted && <Text style={{ color: 'green' }}>Form submitted successfully!</Text>}
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
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

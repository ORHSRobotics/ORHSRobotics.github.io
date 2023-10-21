import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

import WilliesLogo from './../../Assets/WilliesLogo.png'
import SVCS from './../../Assets/PremiumSVCS.png'

export const PageHeader = styled.h1`
    color: #000;
    font-size: min(8vw, 60px);
    text-align: center;
    max-width: 900px;
    padding: 0rem 2rem;
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    
    

`;

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh; // Adjust this according to your design needs
    background-color: #f0f0f0;
    overflow: hidden;
`;

export const VideoBackground = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    height: 100%;
    object-fit: fill;


`;

export const VideoFade = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px; // Adjust this to control the height of the fading effect
    background: linear-gradient(to top, #f0f0f0, transparent);
    z-index: 1;
`;

export const TextBlock = styled.div`
    max-width: 1000px; // Or whatever max-width you want
    margin: 20px auto; // Gives some space on top and centers the block
    padding: 20px; // Internal padding for the text
    background-color: #f0f0f0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Optional: for a subtle shadow effect
    text-align: center; // Centers the text inside the block
`;
export const OverlaidContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;  // Centers the text/content both vertically and horizontally
    color: white;  // Adjust text color accordingly
`;

export const VideoBackgroundSection = styled.video`
    width: 100%;
    height: 100vh; // Adjust this according to your design needs
    object-fit: cover;
`;

export const TextContainerOne = styled.p`
    padding: 2% 2%;
    border-radius: 1rem;
    font-size: min(1.8vw, 25px);
    color: #000;
    text-align: center;
    max-width: 80%;
    margin: 10px 5%;
    height: 45%;
    max-height: 50%
    border-radius: 5px;
    font-family: Montserrat;
`;

export const TextContainer = styled.p`
    padding: 2% 2%;
    border-radius: 1rem;
    font-size: min(1.8vw, 25px);
    color: #000;
    text-align: center;
    max-width: 40%;
    margin: 10px 5%;
    height: 45%;
    max-height: 50%
    border-radius: 5px;
    font-family: Montserrat;
`;
export const SupportText = styled.text`
    color: #000;
    font-size: min(3vw, 35px);
    text-align: center;
    width: 50%;
    max-width: 70%;
    padding: 0rem 5rem 2rem 0rem;
    margin-top: 5%;
    font-family: Montserrat;
`;

export const Section = (direction, background, children, height, width) => {
    const Section = styled.section`
        display: flex;
        flex-direction: ${direction};
        align-items: center;
        justify-content: center;
        align-self: center;
        background: ${background};
        width: ${width},
        height: ${height},
        border-radius: 50px;
    `;
    return (
        <Section>
            {children}
        </Section>
    )

}

export const BackgroundImageSection = styled.div`
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh; // or whatever height you want
    display: flex;
    justify-content: center;
    align-items: center;
    // Add other styles as needed
`;

export const SupportingInfoTopSectionSection = styled.section`
    display: flex;
    flex-direction: space-evenly;
    padding: 0rem 0rem;
    width: 80vw;
    height: auto;
    align-items: center;
    align-self: center;
`;

export const ImageSectionL = styled.img`
        padding: 1rem 8vw;
        width: 30%;
        height: auto;
        max-width: 500px;
`;

export const ImageSectionXL = styled.img`
        padding: 2rem 0rem;
        width: 80%;
        height: auto;
`;

export const SecondSectionText = styled.text`
    font-size: min(5vw, 2.5rem);
    max-width: 80%;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
`;

export const SecondSection = styled.section`
    padding: 2rem 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: space-between;
    width: 80%;
    height: auto;
`;

export const SponsorLogo = (src) => {
    const Image = styled.img.attrs({
        src: src,
        alt: 'Logo'
      })`
        display: flex;
        width: 70%;
        height: auto;
        max-width: 300px;
        padding: 0% 5%;
        
    `;

    return (
        <Image src={src}></Image>
    )
}

export const CourseSpiralHorizontal = styled.img`
    padding: 2rem 0rem;
    width: 80%;
    height: auto;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export const CourseSpiralVertical = styled.img`
    padding: 2rem 0rem;
    width: 80%;
    height: auto;
    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

export const ThirdSectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ThirdSectionColumn = styled.section`
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 70%;
    height: auto;
    align-items: center;
`;

export const ThirdSectionImage = styled.img`
    padding: 2rem 5rem 1rem 5rem;
    width: 50%;
    height: auto;
    @media screen and (max-width: 1000px) {
        padding: 2rem 0rem 1rem 0rem;
        width: 100%;
        max-width: 20rem
    }
`;
export const ThirdSectionTextHeader = styled.text`
    font-weight: bold;
    font-size: min(3vw, 2rem);
    text-align: center;
    padding: 0rem 1rem;
    @media screen and (max-width: 1000px) {
        font-size: min(5vw, 2rem);
    }
`;

export const ThirdSectionText = styled.text`
    font-size: min(2.5vw, 1.5rem);
    padding: 0rem 1.5rem;
    text-align: center;
    @media screen and (max-width: 1000px) {
        font-size: min(4vw, 2rem);
    }
`;


export const IntroText = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000; // Adjust this color to match your design
    font-size: 2rem; // Adjust as needed
    padding: 5rem;
    width: 70%; // Adjust as needed
`;

export const TeamImage = styled.img`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width:0px;
    color: #FFF;
    font-size: 2rem; 
    max-height: 25rem;
    width: 20%; 
`;
export const HeartPicture = styled.img`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%; 
    max-width: 20%;
    padding: 0% 2%
`;
export const MainContent = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    padding: 3rem 5rem;
`;
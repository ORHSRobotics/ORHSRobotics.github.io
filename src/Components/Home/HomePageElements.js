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

export const OurMission = styled.text`
    color: #000;
    font-size: min(3.5vw, 40px);
    text-align: center;
    width: 90%;
    max-width: 70%;
    padding: 0rem 0rem 0rem 0rem;
    margin-top: 5%;
    font-family: Montserrat;
`;

export const SupportText = styled.text`
    color: #000;
    font-size: min(2.5vw, 25px);
    text-align: center;
    width: 90%;
    max-width: 70%;
    padding: 0rem 0rem 2rem 0rem;
    margin-top: 4%;
    margin-bottom: 3.5%;
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
    font-family: Montserrat;
`;

export const SecondSection = styled.section`
    padding: 2rem 0rem;
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
        width: 10vw;
        max-width: 200px;
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


export const IntroText = styled.p`
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #000; // Adjust this color to match your design
    font-size: min(2vw, 25px); // Adjust as needed
    padding: 5rem;
    width: 80%; // Adjust as needed
    font-family: Montserrat;
`;

export const TeamImage = styled.img`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width:0px;
    color: #FFF;
    font-size: 2rem; 
    width: 100%; 
`;
export const HeartPicture = styled.img`
    flex: 1;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 5%; 
    max-width: 30%;
    padding: 0% 0% 0% 0%;
    @media screen and (max-width: 1700px) {
        display: none;
    }
`;
export const MainContent = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
`;
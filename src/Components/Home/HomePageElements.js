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

export const OurMission = styled.h1`
    color: #000;
    font-size: min(4.5vw, 40px);
    text-align: center;
    width: 90%;
    max-width: 70%;
    padding: 0rem 0rem 0rem 0rem;
    margin-top: 5%;
    font-family: Montserrat;
`;

export const SupportText = styled.p`
    color: #000;
    font-size: min(3.5vw, 25px);
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

export const SecondSectionText = styled.h5`
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
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const SponsorLogo = (src, alt, width, height) => {
    const Image = styled.img.attrs({
        src: src,
        alt: 'Logo'
    })`
        display: flex;
        width: 10vw;
        max-width: 200px;
        padding: 0% 5%;
        @media screen and (max-width: 800px) {
            width: 40vw;
            max-width: 200px;
            padding: 5% 0%;
        }
        
    `;

    return (
        <Image src={src} alt={alt}></Image>
    )
}

export const IntroText = styled.p`
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #000; // Adjust this color to match your design
    font-size: min(3.5vw, 25px); // Adjust as needed
    padding: 5rem;
    width: 80%; // Adjust as needed
    font-family: Montserrat;
    @media screen and (max-width: 800px) {
        padding: 2rem;
    }
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
    height: auto;
`;
export const IncisionDecisionPicture = styled.img`
    flex: 1;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 5%; 
    height: auto;
    max-width: 30%;
    padding: 0% 0% 0% 0%;
    @media screen and (max-width: 1600px) {
        display: none;
        height: auto;
        max-width: 30%;
    }
`;
export const MainContent = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
`;
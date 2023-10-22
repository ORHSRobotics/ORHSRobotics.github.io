import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';


export const Container = styled.section`
    margin-left: 10%
    margin-right: 10%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5rem;
`;

export const PageHeader = styled.h1`
    color: #000;
    align-self: center;
    text-align: center;
    font-size: 3rem;
    max-width: 100%;
    padding: 0rem 2rem;
    font-family: Montserrat;
`;

export const ActivitiesHeader = styled.h1`
    color: #000;
    font-size: 2.5vw;
    max-width: 900px;
    padding: 0rem 2rem;
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 3rem 5rem;
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        padding: 40px 0px 0px 0px;
        align-self: center;
        align-items: center;
        justify-content: center;
        width: 100%
    }
`;
export const HeartPicture = styled.img`
    flex: 1;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 40%; 
    max-width: 50%;
    padding: 0% 0% 0% 0%;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export const SponsorDescription = styled.p`
    color: #000;
    max-width: 900px;
    padding: 0rem 2rem;
    font-family: Montserrat;
    
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export const Text = styled.p`
    color: #000;
    align-self: center;
    font-size: min(3.5vw, 30px);
    text-align: center;
    padding: 0rem 2rem;
    max-width: 100%;
    font-family: montserrat;
    @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 0px;
    }
`;

export const SponsorSupportText = styled.p`
    color: #000;
    align-self: center;
    font-size: min(2vw, 25px);
    text-align: center;
    padding: 0rem 2rem;
    max-width: 100%;
    font-family: montserrat;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;







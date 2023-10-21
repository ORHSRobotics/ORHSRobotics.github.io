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
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    padding: 3rem 5rem;
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
    @media screen and (max-width: 100px) {
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
    font-size: min(2.5vw, 30px);
    text-align: center;
    padding: 0rem 2rem;
    max-width: 100%;
`
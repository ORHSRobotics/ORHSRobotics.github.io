import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';


export const Container = styled.section`
    margin-left: 10%
    margin-right: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5rem;
`;

export const PageHeader = styled.h1`
    color: #000;
    font-size: 2.5vw;
    max-width: 900px;
    padding: 0rem 2rem;
    font-family: Montserrat;
`;

export const ActivitiesHeader = styled.h1`
    color: #000;
    font-size: 2vw;
    max-width: 900px;
    padding: 0rem 2rem;
    font-family: Montserrat;
`;

export const Text = styled.p`
    color: #000;
    align-self: center;
    font-size: min(2.5vw, 25px);
    text-align: center;
    padding: 0rem 2rem;
    max-width: 80%;
    font-family: Montserrat;
`
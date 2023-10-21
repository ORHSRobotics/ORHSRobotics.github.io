import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';


export const Container = styled.section`
    margin-left: 10%
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
`;

export const PageHeader = styled.h1`
    color: #000;
    font-size:3.5rem;
    text-align: center;
    max-width: 900px;
    padding: 0rem 2rem;
`;

export const SectionHeader = styled.h3`
    color: #000;
    font-size: 2rem;
    text-align: center;
    max-width: 900px;
    padding: 0rem 2rem;
`;

export const Text = styled.text`
    color: #000;
    font-size: 1.2rem;
    text-align: center;
    padding: 0rem 2rem;
    max-width: 800px
`
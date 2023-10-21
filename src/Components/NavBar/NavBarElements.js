
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';


export const Nav = styled.nav`
  background: #fff;
  display: flex;
  padding: .5rem 10%;
  z-index: 12;
  max-height: 6rem
  
`;
  
export const Logo = styled.img`
  width: 5rem;
  height: auto;
  margin-right: 1%;
  align-self: flex-start;
`;



export const Title = styled(Link)`
  color: #303030;
  font-size: 2vw;
  margin-left: 1rem;
  align-self: center;
  text-decoration: none;
  width: 80rem;
  font-family: Montserrat;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;


export const NavLink = styled(Link)`
  color: #3c3c3c;
  display: flex;
  align-items: center;
  align-self: center;
  text-decoration: none;
  padding: 0rem 4vw 0rem 0rem;
  height: 100%;
  cursor: pointer;
  font-size: min(2vw, 1.4rem); 
  font-family: Montserrat;
  &.active {
    color: #014337;
    text-decoration: underline;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #4ed7cb;

`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 80vw;
  white-space: nowrap; 

`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  color: #4ed7cb;
  justify-content: flex-end;
  width: 400px;
  max-width: 120px;

`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

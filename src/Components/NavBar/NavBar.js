
import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Logo, Title } from './NavBarElements';


export const NavBar = () => {
    return (
        <>
            <Nav>
                <Logo></Logo>
                <Title to='/Home'>ORHS Robotics</Title>
                <Bars/>
                <NavMenu>
                    <NavLink to='/Home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/TheGame' activeStyle>
                        The Game
                    </NavLink>
                    <NavLink to='/About/AboutUs' activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to='/Sponsorship' activeStyle>
                        Sponsorship
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

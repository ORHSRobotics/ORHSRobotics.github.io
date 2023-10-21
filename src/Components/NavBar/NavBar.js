
import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Logo, Title } from './NavBarElements';
import logo from './../../Assets/ORHSRoboticsLogo.png'

export const NavBar = () => {
    return (
        <>
            <Nav>
                <Logo src={logo} alt="Oak Ridge Robotics Logo" width="500px" height="500px"></Logo>
                <Title to='/Home'>ORHS Robotics</Title>
                <Bars/>
                <NavMenu>
                    <NavLink to='/Home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/TheGame' activeStyle>
                        The Game
                    </NavLink>
                    <NavLink to='/About' activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to='/Sponsors' activeStyle>
                        Sponsorship
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

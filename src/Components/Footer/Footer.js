import React, { useEffect, useState } from "react"
import {
    FooterSection,
    FooterCompanyInfoSection,
    FooterContentSection,
    FooterContentSectionRow,
    FooterBottom,
    FooterContentRowsSection
} from "./FooterElements"

import { About, Sponsors, Game } from "../Footer/FooterRoutingObjects";
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();
    const [placeToGo, setPlaceToGo] = useState(null)
    useEffect(() => {
        navigate(placeToGo)
    }, [placeToGo])

    return (
        <FooterSection>
            <FooterContentSection>
                {FooterCompanyInfoSection()}
                <FooterContentRowsSection>
                    {FooterContentSectionRow(About, setPlaceToGo)}
                    {FooterContentSectionRow(Game, setPlaceToGo)}
                    {FooterContentSectionRow(Sponsors, setPlaceToGo)}
                </FooterContentRowsSection>
            </FooterContentSection>
            {FooterBottom(['@orhs_robotics', 'roboticsridge@gmail.com'])}
        </FooterSection>
    )
}
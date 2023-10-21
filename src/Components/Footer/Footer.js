import React from "react"
import {
    FooterSection,
    FooterCompanyInfoSection,
    FooterContentSection,
    FooterContentSectionRow,
    FooterBottom,
    FooterContentRowsSection
} from "./FooterElements"

import { About, Sponsors, Game } from "../Footer/FooterRoutingObjects";

export const Footer = () => {
    return (
        <FooterSection>
            <FooterContentSection>
                {FooterCompanyInfoSection()}
                <FooterContentRowsSection>
                    {FooterContentSectionRow(About)}
                    {FooterContentSectionRow(Game)}
                    {FooterContentSectionRow(Sponsors)}
                </FooterContentRowsSection>
            </FooterContentSection>
            {FooterBottom(['Asclepius Precisions', 'ORHSRobotics@gmail.com'])}
        </FooterSection>
    )
}
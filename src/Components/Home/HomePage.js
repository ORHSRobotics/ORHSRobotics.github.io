import {
    PageHeader,
    Container,
    TopSection,
    SupportText,
    Section,
    ImageSectionL,
    SponsorLogo,
    SupportingInfoTopSectionSection,
    ImageSectionXL,
    SecondSectionText,
    ThirdSectionColumn,
    ThirdSectionContainer,
    ThirdSectionImage,
    ThirdSectionText,
    ThirdSectionTextHeader,
    SecondSection,
    IntroText,
    HeartPicture,
    MainContent,
    TeamImage,
    OurMission

} from "./HomePageElements";

import useWindowDimensions from "../GeneralUse/Dimensions";
import { useState, useEffect } from "react";

import WilliesLogo from './../../Assets/WilliesLogo.png'
import SVCS from './../../Assets/PremiumSVCS.png'
import HesiLogo from './../../Assets/HESILogo.png'
import SpaceCadets  from './../../Assets/SpaceCadetsLogo.png'
import JaxLogo  from './../../Assets/JaxLogo.png'
import BlueHeart from './../../Assets/Blue Heart O1.png'
import TeamPicture from './../../Assets/RoboticsTeam.png'
import IncisionDecision from './../../Assets/IncisionDecision.png'

export const HomePage = () => {
    return (
        <>
            {

                Section(
                    'column',
                    '#fff',
                    <>
                        <TeamImage src={TeamPicture} />
                        <OurMission>
                            Our Mission
                        </OurMission>
                        <SupportText>
                            We are Oak Ridge Robotics, a team dedicated to the cultivation of sudent expertise relating to Science, Technology, Engineering, and Mathematics (STEM) and to inspire students to consider post-secondary educational paths in these disciplines. Established in 1999, we have participated in a range of robotics competitions such as BEST, VEX, and FRC to provide hands-on STEM experiences.
                        </SupportText>
                    </>,
                    'auto', '100%'

                )

            }
            {
                Section(
                    'column',
                    '#f0f0f0',
                    <>
                        <MainContent>
                            <HeartPicture src={IncisionDecision} onClick={() => window.open('https://www.bestrobotics.org/site//')}/>
                            <IntroText>
                                Currently, we are focusing our efforts towards preparing for
                                the <a style={{ "white-space": "nowrap", textDecoration: 'none', color: '#02a386' }} href="https://www.bestrobotics.org/site/">BEST Robotics competition</a>.
                                With the theme being Incision Decision, we are venturing into the realm of medical robotics, a field that holds the
                                promise of revolutionizing healthcare and improving countless lives. Our team is fervently working to design, build,
                                and program a robot capable of performing simulated surgical procedures on a training platform known as SimBody.
                            </IntroText>
                        </MainContent>
                    </>,

                    '100rem', '100%',
                )


            }
            {
                Section(
                    'column',
                    '#fff',
                    <>
                        <SecondSectionText>
                            Proudly Sponsored By:
                        </SecondSectionText>
                        <SecondSection>
                            {SponsorLogo(WilliesLogo)}
                            {SponsorLogo(SVCS)}
                            {SponsorLogo(HesiLogo)}
                            {SponsorLogo(JaxLogo)}
                            {SponsorLogo(SpaceCadets)}
                        </SecondSection>
                    </>,
                    '100rem', '100%'
                )

                }


        </>
    )
}

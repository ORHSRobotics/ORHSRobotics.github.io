import {
    SupportText,
    Section,
    SponsorLogo,
    SecondSectionText,
    SecondSection,
    IntroText,
    IncisionDecisionPicture,
    MainContent,
    TeamImage,
    OurMission

} from "./HomePageElements";

import useWindowDimensions from "../GeneralUse/Dimensions";
import { useState, useEffect } from "react";

import WilliesLogo from './../../Assets/WilliesLogo.png'
import SVCS from './../../Assets/PremiumSVCS.png'
import HesiLogo from './../../Assets/HESILogo.png'
import SpaceCadets from './../../Assets/SpaceCadetsLogo.png'
import JaxLogo from './../../Assets/JaxLogo.png'
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
                        <TeamImage src={TeamPicture} alt="Robotics Team Picture" width="1730px" height="764px" />
                        <OurMission>
                            Our Mission
                        </OurMission>
                        <SupportText>
                            We are Oak Ridge Robotics, a team dedicated to the cultivation of student expertise in fields relating to
                            Science, Technology, Engineering, and  Mathematics (STEM) and to inspire students to consider post-secondary
                            educational paths in these disciplines. Established in 2006, we have competed in a range of robotics competitions
                            ranging from BEST with wooden robots, to metal ones in the VEX competition.
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
                            <IncisionDecisionPicture src={IncisionDecision} onClick={() => window.open('https://www.bestrobotics.org/site//')} alt="Incision Decision" width="578" height="367" />
                            <IntroText>
                                Currently, we are focusing our efforts towards preparing for
                                the <a style={{ "white-space": "nowrap", color: '#014337', backgroundColor: "#f0f0f0", }} href="https://www.bestrobotics.org/site/">BEST Robotics competition</a>.
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
                            <>
                                {SponsorLogo(WilliesLogo, "Willies")}
                                {SponsorLogo(SVCS, "Premium Services LLC")}
                            </>
                            {
                                !/Mobi|Android/i.test(window.navigator.userAgent) ? (
                                    <>
                                        {
                                            SponsorLogo(HesiLogo, "HESI")
                                        }
                                        {
                                            SponsorLogo(JaxLogo, "Jax")
                                        }
                                        {
                                            SponsorLogo(SpaceCadets, "Space Cadets")
                                        }
                                    </>
                                ) : null
                            }
                        </SecondSection>

                    </>,
                    '100rem', '100%'
                )

            }


        </>
    )
}

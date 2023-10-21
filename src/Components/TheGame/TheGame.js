import {
    Container,
    Section,
    ImageSectionL,
    ImageSectionXL,
    SupportingInfoTopSectionSection,
    MainContent,
    TeamImage,
    TextContainer,
    TextContainerOne,
    BackgroundImageSection,
    VideoBackgroundSection,
    VideoContainer,
    VideoBackground,
    OverlaidContent,
    TextBlock,
    Header,
    BiSection

} from "./HomePageElements";  // Assuming the same styled components.

import { useState, useEffect, useRef } from "react";
import GameFieldBackground from './../../Assets/GameFieldBackground.png';
import RobotPicture from './../../Assets/RobotPicture.png';
import SirJerry from './../../Assets/SirJerry.jpg';
import PlaqueRemoval from './../../Assets/PlaqueRemoval.jpg';
import GameFieldVideo from './../../Assets/GameFieldVideo.mp4';
import styled from 'styled-components';
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from 'react-icons/fa';

const ButtonContainer = styled.div`
  position: absolute;
  z-index: 99;
  top: 12vh;  // Adjust as needed
  right: 1vw;  // Adjust as needed
  background-color: rgba(255, 255, 255, 0.6); // For visibility
`;

const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.6); // For visibility
  border: none;
  color: #303030;
  font-size: 24px;
  margin: 10px;
  padding-top: 7px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  align-self: center;

  &:hover {
    color: #ddd;
  }
`;


export const TheGame = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(null);

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        const isMobile = /Mobi|Android/i.test(userAgent);
        setIsPaused(isMobile);
    }, []);

    const videoRef = useRef(null);



    const toggleMute = () => {
        setIsMuted(!isMuted);
        videoRef.current.muted = !isMuted;
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
        isPaused ? videoRef.current.play() : videoRef.current.pause();
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container>

            <VideoContainer id="GameDetails">
                {
                    !/Mobi|Android/i.test(window.navigator.userAgent) ? (
                        <ButtonContainer>
                            <StyledButton onClick={toggleMute}>
                                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                            </StyledButton>
                            <StyledButton onClick={togglePause}>
                                {isPaused ? <FaPlay /> : <FaPause />}
                            </StyledButton>
                        </ButtonContainer>
                    ) : (
                        <></>
                    )
                }


                <VideoBackground ref={videoRef} autoPlay loop muted={isMuted}>
                    <ButtonContainer>
                        <StyledButton onClick={toggleMute}>
                            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                        </StyledButton>
                        <StyledButton onClick={togglePause}>
                            {isPaused ? <FaPlay /> : <FaPause />}
                        </StyledButton>
                    </ButtonContainer>
                    <source src={GameFieldVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </VideoBackground>



            </VideoContainer>

            {

                Section(
                    'column',
                    '#f0f0f0',
                    <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Header>
                            Game Details
                        </Header>
                        <TextContainerOne>
                            This years BEST Robotics competition, embodied by the phrase "Incision Decision", is themed around surgery.
                            In this competition, robots are to assist surgeons such that the surgeon(s) can conduct multiple surgeries at once
                        </TextContainerOne>
                    </div>,

                    '100%', '100%'

                )
            }

            {

                Section(
                    'row',
                    '#fff',
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Header id="OurRobot">
                            Our Robot
                        </Header>,
                        <BiSection style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TextContainer>
                                Our solution to this multi-facited problem? <br></br>
                                Sir Jerry, a robot who is able to aid surgeons in brain biopsy, arterial plaque removal,
                                vein harversting, internal hemorrhaging damage control, cardiac abalation, and coronary artery bypass.
                            </TextContainer>
                            <div style={{ display: 'flex', marginLeft: '8vw' }}>
                                <TeamImage src={SirJerry} alt="Picture of Sir Jerry" />
                            </div>

                        </BiSection>
                    </div>
                    ,

                    '100%', '100%'

                )
            }
            {

                windowWidth > 1000 ? (
                    Section(
                        'row',
                        '#f0f0f0',
                        <BiSection style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', padding: '3rem 1rem', marginLeft: '10vw' }}>
                                <TeamImage src={RobotPicture} alt="Sir Jerry completing the task of vein insertion" />
                            </div>
                            <TextContainer>
                                Our robot, Sir Jerry, has the capability to perform two critical tasks in a surgical environment.
                                The first task is "Vein Insertion", where it can accurately locate and insert a catheter into a patient's vein for fluid or medication delivery.
                                The second task is "Hemorrhage Control", where it uses sensors to detect internal bleeding and can apply pressure or sealants to control the hemorrhage.
                            </TextContainer>


                        </BiSection>,

                        '100%', '100%'
                    )
                ) : (
                    Section(
                        'row',
                        '#f0f0f0',
                        <BiSection>
                            <TextContainer >
                                Our robot, Sir Jerry, has the capability to perform two critical tasks in a surgical environment.
                                The first task is "Vein Insertion", where it can accurately locate and insert a catheter into a patient's vein for fluid or medication delivery.
                                The second task is "Hemorrhage Control", where it uses sensors to detect internal bleeding and can apply pressure or sealants to control the hemorrhage.
                            </TextContainer>
                            <div style={{ display: 'flex' }}>
                                <TeamImage src={RobotPicture} alt="Sir Jerry completing the task of vein insertion" />
                            </div>
                        </BiSection>,

                        '100%', '100%'
                    )
                )
            }
            {
                Section(
                    'row',
                    '#fff',
                    <BiSection >
                        <TextContainer style={{}}>
                            Sir Jerry is also adept at tasks that involve more intricate procedures.
                            For example, it can perform "Plaque Removal" by navigating through arteries and using a specialized tool to safely remove arterial plaque.
                            In "Cardiac Ablation", the robot can locate and neutralize problematic cardiac cells that cause arrhythmia, improving heart function.
                        </TextContainer>
                        <div style={{ display: 'flex', marginLeft: '8vw', alignItems: "center" }}>
                            <TeamImage src={PlaqueRemoval} alt="Sir jerry completing the task of plaque removal" />
                        </div>

                    </BiSection>,

                    '100%', '100%'
                )
            }



        </Container >
    )
}

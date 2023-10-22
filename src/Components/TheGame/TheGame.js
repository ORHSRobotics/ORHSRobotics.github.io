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
                            The theme for the BEST Robotics competition this year, Incision Decision,
                            represents the concept that advancements in technology and innovation can improve future medical care.
                            Incision Decision consists of a training platform for minimally invasive surgery (MIS) called Simbody.
                            The platform simulates the internal human body and acts as a training ground for several assisted surgeries.
                            The powerful machinery operated by training surgeons performs groundbreaking surgical procedures, transforming
                            the medical field and saving lives.
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
                                Dr. Jerry: a robot that is capable of aiding surgeons in a variety of
                                operations, ranging from brain biopsy and arterial plaque removal to vein harvesting and cardiac ablation.
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
                                Dr. Jerry, our advanced robotic system, excels in performing intricate medical
                                procedures, including "Plaque Removal" and "Cardiac Ablation."
                                In "Plaque Removal," the robot expertly navigates through arteries using a precisely
                                engineered linear arm with linear slide rails and a specialized toolset
                                for safe and efficient arterial plaque removal. Its exceptional precision
                                ensures accurate interventions.
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
                                Dr. Jerry, our advanced robotic system, excels in performing intricate medical
                                procedures, including "Plaque Removal" and "Cardiac Ablation."
                                In "Plaque Removal," the robot expertly navigates through arteries using a precisely
                                engineered linear arm with linear slide rails and a specialized toolset
                                for safe and efficient arterial plaque removal. Its exceptional precision
                                ensures accurate interventions.
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
                            In the domain of "Cardiac Ablation,"
                            Dr. Jerry skillfully identifies and neutralizes problematic cardiac cells
                            responsible for arrhythmias, thereby enhancing cardiac function.
                            This is facilitated by a well-structured PVC tee piece integrated
                            into the linear arm for plaque removal and another at the base for
                            ablation tool use. These technical innovations enable the seamless
                            execution of complex medical procedures, prioritizing patient care
                            and optimal clinical outcomes.</TextContainer>
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

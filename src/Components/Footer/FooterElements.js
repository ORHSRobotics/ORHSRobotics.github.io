import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';


export const ImageSectionL = styled.img`
        padding: 1rem 4rem;
        width: 30%;
        height: auto;
        max-width: 500px;
`;

export const ImageSectioXL = styled.img`
        padding: 1rem 4rem;
        width: 50%;
        height: auto;
        max-width: 500px;
        font-family: Montserrat;
`;

export const FooterSection = styled.section`
    display: flex;
    background: #f0f0f0;
    flex-direction: column;
    max-height: 350px;
    width: 100%;
    max-width: 100%
    overflow: hidden;
    font-family: Montserrat;
`;

export const FooterContentSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px
    max-width: 100%
    font-family: Montserrat;

`;

export const FooterCompanyInfoSection = () => {
    const Container = styled.section`
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: center;
        width: min(50vw,50%);
        font-family: Montserrat;
    `;
    const CompanyText = styled.text`
        color: #000;
        font-size: min(4vw, 35px);
        font-family: Montserrat;
    `;
    const LogoSection = styled.img`
        padding: 1rem 1vw 1rem 4vw;
        width: 9vw;
        height: auto;
        max-width: 500px;
        font-family: Montserrat;
    `;

    const Name = "ORHS Robotics"
    const logo = require('./../../Assets/ORHSRoboticsLogo.png')
    return (
        <Container>
            <LogoSection src={logo}></LogoSection>
            <CompanyText>{Name}</CompanyText>
        </Container>
    )
}

export const FooterContentRowsSection = styled.section`
    display: flex;
    flex-direction: row;
    padding: 1rem 1vw 0rem 0rem;
    font-family: Montserrat;
`;

export const FooterContentSectionRow = (info) => {
    const Container = styled.section`
        width: 20vw;
        height: auto;
        padding: 3rem 0rem;
        display: flex;
        flex-direction: column;
        font-family: Montserrat;
    `;

    const TitleText = styled.text`
        color: #000;
        font-size: min(3vw, 30px);
        margin-bottom: .2rem;
        font-weight: bold;
        font-family: Montserrat;
    `;

    const ItemText = styled(Link)`
        color: #000;
        font-size: min(2vw, 20px);
        padding .5rem 0rem;
        text-decoration: none;
        font-family: Montserrat;
    `;

    return (
        <Container>
            <TitleText>{info.Title}</TitleText>
            {Object.keys(info).map((key) => {
                if (key == "Title") {
                    return null
                } else {
                    return (
                        <ItemText to={info[key]} activeStyle>
                            {key}
                        </ItemText>
                    )
                }

            })}
        </Container>
    )



}


export const FooterBottom = (text) => {
    const FooterText = styled.text`
    color: #000;
    padding: 0rem .9rem;
    font-size: min(3vw, 1rem);

`;
    const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items; center;
    justify-content: center;
    height: 50px;
    width: 100%;
    padding: 2rem 0rem 0rem 0rem;


    `;

    return (
        <Container>
            {text.map(item => {
                return (
                   <FooterText>{item}</FooterText> 
                )
            })}
        </Container>
    )
}



import React from "react";
import { Container, PageHeader, SectionHeader, Text } from "./PrivacyPageElements";

export const PrivacyPage = (header, body) => {

    return (
        <Container>
            <PageHeader>{header}</PageHeader>
            {   
                
                body.map((elem) => {
                    const key = Object.keys(elem)[0]
                    const value = Object.values(elem)[0]
                    return (
                        <>
                            <SectionHeader>{key}</SectionHeader>
                            <Text>{value}</Text>
                        </>
                    )
                })
            }
        </Container>
    )
}
import React from 'react';
import {
  PageHeader,
  Text,
  Container,
  ActivitiesHeader
} from './AboutPageElements';
import { TimelineElement } from './TimelineElement';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const AboutPage = () => {

  return (
    <Container>
      <PageHeader id="AboutUs">About us</PageHeader>
      <Text>
        The Oak Ridge Robotics team was founded in the late 2016 by Oak Ridge Physics teacher Timothy Fox. Starting with only 5 students,
        the team has grown to include over 60 team members. With the support from our many sponsors and the gracious community of Texas at large,
        we have been able to participate in a multitude of competitions, from BEST (Boosting Engineering, Science and Technology) Robotics,
        to VEX robotics.
      </Text>
      <hr />
      <ActivitiesHeader id="Timeline">
        Our Timeline
      </ActivitiesHeader>
      <VerticalTimeline>
        <TimelineElement date="2022" title="Egg Robotics" />
        <TimelineElement date="2022" title="BEST Robotics | Made 2 Order"/>

        <TimelineElement date="2021" title="Egg Robotics" />
        <TimelineElement date="2021" title="BEST Robotics | DemoDaze" />
        <TimelineElement date="2021" title="VEX Robotics" />

        <TimelineElement date="2020" title="Egg Robotics" />
        <TimelineElement date="2020" title="BEST Robotics | Outbreak" />
        <TimelineElement date="2020" title="VEX Robotics" />

        <TimelineElement date="2019" title="BEST Robotics | Off the Grid" />
        <TimelineElement date="2019" title="VEX Robotics" />

        
        <TimelineElement date="2018" title="BEST Robotics | Current Events" />
        <TimelineElement date="2018" title="VEX Robotics" />

        
        <TimelineElement date="2017" title="BEST Robotics | Outbreak"/>
        <TimelineElement date="2017" title="VEX Robotics" />
      </VerticalTimeline>
    </Container>
  )
}

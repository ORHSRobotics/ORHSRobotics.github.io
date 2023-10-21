import React, { useEffect, useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

export const TimelineElement = ({ date, title, description }) => {
  const [iconStyle, setIconStyle] = useState({
    background: '#02b796',
    color: '#fff',
    width: '25px',
    height: '25px',
    position: 'absolute',
    top: '40%',
    left: '51%'
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1173) {
        setIconStyle({
          background: '#02b796',
          color: '#fff',
          width: '25px',
          height: '25px',
          position: 'absolute',
          top: '40%',
        });
      } else {
        setIconStyle({
          background: '#02b796',
          color: '#fff',
          width: '25px',
          height: '25px',
          position: 'absolute',
          top: '40%',
          left: '51%'
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it once to set the initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <VerticalTimelineElement
      date={date}
      iconStyle={iconStyle}
      contentStyle={{ background: '#f0f0f0', borderBottomColor: 'black', boxShadow: '0px 3px 0px #02b796' }}
    >
      <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Montserrat" }}>{title}</h3>
      {description && <p style={{ fontFamily: "Montserrat" }}>{description}</p>}
    </VerticalTimelineElement>
  );
};

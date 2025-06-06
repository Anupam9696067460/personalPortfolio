import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';


const Experience = () => {
  return (
    <div id='experience' className='relative min-h-screen p-5 bg-[#F5EFFF] '>
          <h1 className='text-center text-5xl font-bold py-3 font-serif'>My <span className='text-[#37b9c8] italic'>Experience</span></h1>

      <br /><br />

<VerticalTimeline lineColor='#89A8B2'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: '#CDC1FF', color: '#000' ,borderRadius:'10px' }}
    contentArrowStyle={{ borderRight: '7px solid  #89A8B2' }}
    // date="2011 - present"
    iconStyle={{ background: '#A294F9' }}
    icon={<FontAwesomeIcon icon={faSchool} />}
    // shadowSize={"large"}
  >
    <h3 className="vertical-timeline-element-title text-center font-bold">HIGH SCHOOL</h3>
    <h4 className="vertical-timeline-element-subtitle text-center font-medium ">S.S.A INTER COLLEGE Kamtaganj, Sultanpur(2019)</h4>
    <p className='text-center  font-thin '>
    I successfully completed my high school in 2019 under the UP Board, securing an
     excellent score of 80.67%. During this time, I received several awards and certificates
      in recognition of my dedication and achievements.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: '#CDC1FF', color: '#000' ,borderRadius:'10px' }}
    contentArrowStyle={{ borderRight: '7px solid  #89A8B2' }}
    // date="2011 - present"
    iconStyle={{ background: '#A294F9' }}
    icon={<FontAwesomeIcon icon={faBuilding} />}
  >
    <h3 className="vertical-timeline-element-title text-center font-bold">SENIOR SECONDARY</h3>
    <h4 className="vertical-timeline-element-subtitle text-center font-medium">B.S. INTER COLLAGE Bharkhar, Sultanpur(2021)</h4>
    <p className='text-center font-light'>
    I successfully completed my 12th in 2021 under the UP Board, achieving a commendable score of 68%. My efforts
     were acknowledged through several awards and certificates, reflecting my dedication and accomplishments.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: '#CDC1FF', color: '#000' ,borderRadius:'10px' }}
    contentArrowStyle={{ borderRight: '7px solid  #89A8B2' }}
    date="2021 - 2025"
    iconStyle={{ background: '#A294F9' }}
    icon={<FontAwesomeIcon icon={faGraduationCap} />}
  >

<h3 className="vertical-timeline-element-title text-center font-bold">GRADUATION</h3>
    <h4 className="vertical-timeline-element-subtitle text-center font-medium">Kamla Nehru Institute of Physical & Social Sciences,Sultanpur, Uttar Pradesh</h4>
    <p className='text-center font-light'>
    I am pursuing my B.Tech degree under AKTU and am expected to graduate in 2025. Throughout my academic 
    journey, I have earned several awards and certificates in recognition of my dedication and achievements.
    </p>
   
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#CDC1FF', color: '#000' ,borderRadius:'10px' }}
    contentArrowStyle={{ borderRight: '7px solid  #89A8B2' }}
    date="March- April 2024"
    iconStyle={{ background: '#A294F9' }}
    icon={<FontAwesomeIcon icon={faCode} />}
  >
{/* <h3 className="vertical-timeline-element-title text-center font-bold">CodSoft</h3>
    <h4 className="vertical-timeline-element-subtitle text-center font-medium">Frontend Developer - Internship</h4>
    <p className='text-center font-light'>
    Here, I developed three responsive websites using HTML, CSS, and JavaScript, focusing on creating user-friendly interfaces.
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: '#CDC1FF', color: '#000' ,borderRadius:'10px' }}
    contentArrowStyle={{ borderRight: '7px solid  #89A8B2' }}
    date="July 2024 - present"
    iconStyle={{ background: '#A294F9' }}
    icon={<FontAwesomeIcon icon={faReact} />}
  > */}

<h3 className="vertical-timeline-element-title text-center font-bold">Trainee @ JSpiders</h3>
    <h4 className="vertical-timeline-element-subtitle text-center font-medium">Noida, Uttar Pradesh</h4>
    <p className='text-center font-light'>
    I am currently enrolled in a Java Full Stack Development course at JSpiders, Noida. The curriculum includes
     SQL, Core Java, Web Technologies, Spring, Hibernate, Advanced Java,
     Programming, and Grooming, providing me with a strong foundation for my career as a Software Development Engineer.
    </p>

  </VerticalTimelineElement>

  
  
  

</VerticalTimeline>
      
    </div>
  )
}

export default Experience;

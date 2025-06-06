import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import SkillLogo from '../components/SkillLogo';
import html from '../assets/skillsLogo/html.png';
import css from '../assets/skillsLogo/css1.png';
import js from '../assets/skillsLogo/js.png';
import react from '../assets/skillsLogo/react.png';
import bootstrap from '../assets/skillsLogo/bootstrap.png';
import tailwind from '../assets/skillsLogo/tailwind.png';
import Java from '../assets/skillsLogo/java.png';
import jdbc from '../assets/skillsLogo/jdbc.png';
import servlet from '../assets/skillsLogo/servlet1.jpeg';
import jsp from '../assets/skillsLogo/jsp.png';
import hibernate from '../assets/skillsLogo/hibernate.png';
import spring from '../assets/skillsLogo/spring.png';
import sql from '../assets/skillsLogo/sql.jpeg';
import git from '../assets/skillsLogo/git.png';
import github from '../assets/skillsLogo/github.png';
import restfulapi from '../assets/skillsLogo/restfulapi.png';


const Skills = () => {
  return (
    <div id='skills' className='flex flex-col justify-center items-center md:p-5 md:pb-10 sm:p-2 bg-[#F1F0E8]' >
          <h1 className='text-center text-5xl font-bold py-3 font-serif'>My <span className='text-[#37b9c8] italic'>Skills</span></h1>

      <div className='flex flex-wrap w-3/4 justify-center '>
        <SkillLogo name="HTML" image={html} />
        <SkillLogo name="CSS" image={css}/>
        <SkillLogo name="JavaSript" image={js}/>
        <SkillLogo name="React" image={react}/>
        {/* <SkillLogo name="BootStrap" image={bootstrap}/> */}
        <SkillLogo name="Tailwind" image={tailwind}/>
        <SkillLogo name="SQL" image={sql}/>
        <SkillLogo name="Java" image={Java}/>
        <SkillLogo name="JDBC" image={jdbc}/>
        {/* <SkillLogo name="Servlet" image={servlet}/> */}
        <SkillLogo name="JSP" image={jsp}/>
        <SkillLogo name="Hibernate" image={hibernate}/>
        <SkillLogo name="Spring Boot" image={spring}/>
        <SkillLogo name="Git" image={git}/>
        <SkillLogo name="Github" image={github}/>
        {/* <SkillLogo name="RESTful APIs" image={restfulapi}/> */}

      </div>
      {/* I am skill page
      <FontAwesomeIcon icon={faHtml5}/>
      <FontAwesomeIcon icon={faCss3}/>
      <FontAwesomeIcon icon={faJs}/>
      <FontAwesomeIcon icon={faReact}/>
      <FontAwesomeIcon icon={faBootstrap}/>
      <FontAwesomeIcon icon={faJava}/>
      <FontAwesomeIcon icon={faDatabase}/> */}
    </div>
  )
}

export default Skills;

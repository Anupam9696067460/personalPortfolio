import React from 'react';
import Card from '../components/Card';
import DigitalClock from "../assets/project_image/DigitalClock.png";
import TodoList from "../assets/project_image/TodoList.png";
import GatherUp from "../assets/project_image/GatherUp.png";
import WeatherApp from "../assets/project_image/WeatherApp.png";
import QrCodeGenerator from "../assets/project_image/QrCodeGenerator.png";
// import portfolio from "../assets/project_image/PortFolio.png";

const Projects = () => {
  return (
    <div  id='projects' className='bg-[#F5EFFF]'>
    <h1 className='text-center text-5xl font-bold py-3 font-serif'>My <span className='text-[#37b9c8] italic'>Projects</span></h1>
    <div className='flex flex-wrap justify-center'>
    <Card image={GatherUp}
      name="GatherUp"
       description="Developed a full-featured event management system using Spring Boot (Backend) and React.js (Frontend) to streamline event creation, registration and user role-based access. "
        explore=""
        github=""
       />
      <Card image={QrCodeGenerator}
      name="QrCodeGenerator"
       description="I built a Valorant game-themed clone using HTML and CSS, highlighting an engaging UI and dynamic elements. This project demonstrates my expertise in creating visually appealing applications."
        explore=""
        github=""
        />
      
      <Card image={TodoList}
      name="TodoList"
       description="Built a responsive and interactive To-Do List application using React.js, HTML, CSS, and JavaScript, powered
by Vite for fast build and development."
        explore=""
        github="https://github.com/Anupam9696067460/todo-app"
        />
        {/* <Card image={portfolio}
      name="Porfolio Website"
       description="A personal portfolio website using React and Tailwind, showcasing my projects, skills & achievements with professional interface that show my ability to build responsive web designs."
        explore=""
        github="https://github.com/Anupam9696067460/personalPortfolio"
        /> */}
    <Card image={WeatherApp}
      name="Weather App"
       description="Developed a responsive weather forecasting web app using OpenWeatherMap API to fetch real-time weather
data based on city input. Using HTML CSS, JavaScript."
        explore="https://weatherappanupam.netlify.app/"
        github="https://github.com/Anupam9696067460/Weather-App-"
        />
      
        <Card image={DigitalClock}
      name="Digital Clock"
       description="Developed a real-time Digital Clock web application using HTML, CSS, and JavaScript, displaying hours,
minutes, and seconds with dynamic updates.  Using HTML CSS, JavaScrip"
        explore="https://anupam-digital-clock.netlify.app/"
        github="https://github.com/Anupam9696067460/DigitalClock"
        />
    </div>
    </div>
  )
}

export default Projects;

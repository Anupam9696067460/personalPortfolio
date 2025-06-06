import React from 'react';
import anupam from '../assets/anupam1.jpg';
import { Link } from 'react-scroll';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import resume from '../assets/resume/resume.pdf'

const Home = () => {
  return (<>
    <div id='/' className='bg-[#F1F0E8] flex flex-wrap mt-20 min-h-screen' >
      <div className='md:w-2/5 w-full sm:m-0 mt-10  flex justify-center items-center '>
        <img className=' border-[10px] border-zinc-50 rounded-[50%] sm:w-96 sm:h-96 w-60 h-60' src={anupam} alt="image" />
      </div>
      <div className='md:w-3/5 sm:w-full sm:pt-[10%] pt-[5%] sm:pr-24 p-2'>
             <h2 className='font-semibold text-center sm:text-4xl text-2xl'>Hello, I'm </h2>
             <h1 className='font-bold text-center sm:text-5xl text-3xl pt-2'>Anupam Singh</h1>
             <p className='font-normal  sm:text-3xl text-xl text-wrap text-center pt-2 leading-9'>A dedicated <span className='italic text-[#89A8B2]'> Full Stack Web Developer </span>.
             I specialize in creating dynamic and user-friendly web applications.
             Let's collaborate to turn ideas into impactful digital solutions.
             </p>
             <br />
            <div className='flex flex-wrap justify-center'>
            <Link to="contact" offset={-80} className='transform hover:scale-110 transition duration-200 sm:text-2xl text-sm m-3 mt-5 bg-[#89A8B2] text-slate-100 border border-[#B3C8CF] py-2 px-4 my-3 rounded-[50px] hover:text-black hover:bg-[#F1F0E8]'>Contact me here <i className="fa-solid fa-arrow-right"></i></Link>
            <a href={resume} className='transform hover:scale-110 transition duration-200 sm:text-2xl text-sm m-3 mt-5 border border-[#B3C8CF] py-2 px-4 my-3 rounded-[50px] hover:text-slate-100 hover:bg-[#89A8B2] animate-pulse'>Download CV <i className="fa-solid fa-arrow-down-long"></i></a>
            <a href="https://www.linkedin.com/in/anupam-singh-833576312/" target='_blank' className='transform hover:scale-110 transition duration-200 sm:text-2xl text-sm m-1 mt-5 py-1 px-1 my-3 rounded-[50px] '><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Anupam9696067460" target='_blank' className='transform hover:scale-110 transition duration-200 sm:text-2xl text-sm m-1 mt-5 py-1 px-1 my-3 rounded-[50px] '><i className="fa-brands fa-github"></i></a>
            </div>
            

      </div>
    </div>
    <Projects/>
    <Skills/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default Home;

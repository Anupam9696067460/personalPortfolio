import React from 'react';
import aditya from '../assets/anupam1.jpg';


const About = () => {
  return (
    <div id='about' className='lg:w-full sm:w-full lg:px-[17%] bg-[#F1F0E8] pt-20 pb-24 '>
      <h1 className='text-center text-4xl font-bold py-3'>About Me</h1>
      <br />
      
      <div className=' md:w-full sm:w-full  flex flex-col justify-center items-center'>
              <img className='border-[10px] border-zinc-50 rounded-[50%] w-60 h-60' src={aditya} alt="image" />
              <h1 className='text-center text-4xl font-medium py-3 text-[#89A8B2]'>Full Stack Developer</h1>
      </div>
      <br />
      <h2 className='sm:text-2xl text-xl sm:pl-0 pl-4 font-medium '>Hi, I'm Anupam Singh!</h2>
      <p className='sm:text-xl sm:p-1 text-sm p-4 leading-9 tracking-wide'>I’m a Computer Science student specializing in
         <span className='italic text-xl font-medium'> Java Full Stack Web Development</span> with experience in 
       <span className='italic text-xl font-medium'> HTML, CSS, JavaScript, React JS, Java and spring boot. </span>  
      Currently pursuing my <span>B.Tech</span>, I’m also honing my skills at Jspiders to deepen my expertise.
      <br />
      Passionate about solving problems, I enjoy creating responsive and functional web applications. My core stack is React,
       and I’m always eager to learn and explore new technologies.
       <br />
         Beyond coding, I love <span className='italic text-xl font-medium'>listening songs, playing cricket,</span>
          and learning new skills. My aim is to secure a 
         <span className='italic text-xl font-medium'> full-time software developer role</span> and contribute effectively to impactful projects.
         </p>
    </div>
  )
}

export default About;

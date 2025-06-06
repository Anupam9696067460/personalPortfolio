import React, { useState } from 'react';
import logo from '../assets/logo1.png';
import { Link as Link1 } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
import { Link } from 'react-scroll';

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='h-20 w-full z-50 flex flex-wrap justify-between bg-[#E5E1DA] fixed top-0'>
      <aside className='w-2/6 h-full'>
       <img className='h-16 w-40 pl-10 pt-3 m-1 ' src={logo} alt="Logo"/>
      </aside> 

{/* Hamburger Menu Icon */}
<div
className={` md:hidden flex items-center pr-10 cursor-pointer`}
onClick={() => setIsMenuOpen(!isMenuOpen)}
>
<i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-3xl`}></i>
</div>
        <ul className={`md:w-[55%] pr-16 py-0.5 md:flex flex-wrap list-none justify-around text-2xl font-semibold 
         ${
            isMenuOpen ?'absolute top-20 right-0 bg-[#dedcd7] w-[50%] shadow-lg flex flex-col items-center py-2':'hidden md:flex'
         }
          `}>
             <button className='border border-[#B3C8CF] py-1 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
                {/* <li className="relative"><HashLink to="/">Home</HashLink></li> */}
                {/* <li className="relative"><a href="#">Home</a></li> */}
                <li className="relative"><Link to="/" offset={-80}><Link1 to="/" offset={-80}>Home</Link1></Link></li>
             </button>
             <button className='border border-[#B3C8CF] py-1 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
                {/* <li className="relative"><HashLink to="#about">About</HashLink></li> */}
                {/* <li className="relative"><a href="#about">About</a></li> */}
                <li className="relative"><Link1 to="about" offset={-80}>About</Link1></li>
             </button>
             <button className='border border-[#B3C8CF] py-1 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
                {/* <li className="relative"><HashLink to="#projects">Projects</HashLink></li> */}
                {/* <li className="relative"><a href="#projects">Project</a></li> */}
                <li className="relative"><Link to="projects" offset={-80}><Link1 to="/" offset={-80}>Projects</Link1></Link></li>
             </button>
             <button className='border border-[#B3C8CF] py-1 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
                {/* <li className="relative"><HashLink to="#skills">Skills</HashLink></li> */}
                {/* <li className="relative"><a href="#skills">Skills</a></li> */}
                <li className="relative"><Link to="skills" offset={-80}><Link1 to="/" offset={-80}>Skills</Link1></Link></li>
             </button>

             <button className='border border-[#B3C8CF] py-1 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
                {/* <li className="relative"><HashLink to="#skills">Skills</HashLink></li> */}
                {/* <li className="relative"><a href="#skills">Skills</a></li> */}
                <li className="relative"><Link to="experience" offset={-80}><Link1 to="/" offset={-80}>Experience</Link1></Link></li>
             </button>

             <button className='border border-[#B3C8CF] py-1 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
                {/* <li className="relative"><HashLink to="#contact">Contact</HashLink></li> */}
                {/* <li className="relative"><a href="#contact">Contact</a></li> */}
                <li className="relative"><Link to="contact" offset={-80}><Link1 to="/" offset={-80}>Contact</Link1></Link></li>
             </button>
             
        </ul>

        {/* <button className="relative overflow-hidden bg-transparent text-white py-2 px-4 border border-white rounded-md group">
  <span className="absolute inset-0 bg-red-500 translate-y-full transition-transform duration-1000 ease-in-out group-hover:translate-y-0"></span>
  <span className="relative">Hover Me</span>
</button> */}

    </div>
  )
}

export default Navbar;















// import React, { useState } from 'react';
// import logo from '../assets/logo2.png';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className='h-20 w-full z-50 flex justify-between items-center bg-[#E5E1DA] fixed top-0 shadow-md'>
//       {/* Logo Section */}
//       <div className='w-2/6 h-full flex items-center'>
//         <img className='h-16 w-40 pl-10' src={logo} alt="Logo" />
//       </div>

//       {/* Hamburger Menu Icon */}
//       <div
//         className='sm:hidden flex items-center pr-10 cursor-pointer'
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-3xl`}></i>
//       </div>

//       {/* Navigation Items */}
//       <ul
//         className={`sm:w-2/4 sm:flex flex-wrap justify-around text-2xl font-semibold list-none pr-16 ${
//           isMenuOpen ? 'absolute top-20 right-0 bg-[#E5E1DA] w-full shadow-lg flex flex-col items-center py-5' : 'hidden sm:flex'
//         }`}
//       >
//         {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
//           <li key={item} className='my-2'>
//             <button className='border border-[#B3C8CF] py-1 px-4 rounded-[50px] hover:text-slate-100 relative overflow-hidden group'>
//               <span className='absolute inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
//               <Link to={item.toLowerCase()} offset={-80} className='relative'>
//                 {item}
//               </Link>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

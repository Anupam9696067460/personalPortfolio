import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#E5E1DA] text-center py-2 border-t border-[#B3C8CF]">
    <div className="container mx-auto">
      {/* Name and Title */}
      <h2 className="text-2xl font-semibold">Anupam Singh</h2>
      <p className="text-lg text-gray-600">Full Stack Web Developer</p>
  
      {/* Links */}
      <ul className="flex justify-center mt-4 space-x-6 text-lg font-medium">
          <li>
            <Link to="/" offset={-80} className="hover:text-[#89A8B2]">
              Home
            </Link>
          </li>
        {[ 'Experience', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <Link to={`${item.toLowerCase()}`} offset={-80} className="hover:text-[#89A8B2]">
              {item}
            </Link>
          </li>
        ))}
      </ul>
  
      {/* Social Media */}
      <div className="flex justify-center mt-4 space-x-4">
        <a href="https://www.linkedin.com/in/anupam-singh-833576312/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin text-2xl hover:text-[#89A8B2]"></i>
        </a>
        <a href="https://github.com/Anupam9696067460" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github text-2xl hover:text-[#89A8B2]"></i>
        </a>
      </div>
  
      {/* Copyright */}
      <p className="mt-4 text-gray-500">© 2024 Anupam Singh. All rights reserved.</p>
  
      {/* Back to Top */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-4 bg-[#89A8B2] text-white py-1 px-3 rounded hover:bg-[#6e8895]"
      >
        Back to Top
      </button> */}
    </div>
  </footer>
  
  )
}

export default Footer;

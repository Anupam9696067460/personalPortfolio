import React from 'react';


const Card = ({image,name, description, explore, github}) => {
  return (
    <div className='w-[380px] h-[514px] m-4 mx-10 p-2 border border-[#B3C8CF] rounded-lg'>
      <img  src={image} alt="Not found" className='w-full h-2/4'/>
      <h1 className='font-semibold text-3xl text-center'>{name}</h1>
      <p className='font-medium  lg:text-lg text-sm  text-center '>{description}</p>
      <div className='flex justify-center align-middle'>
      <button className='transform hover:scale-110 transition duration-200 text-2xl m-3 mt-5 bg-[#89A8B2] text-slate-100 border border-[#B3C8CF] py-2 px-4 my-3 rounded-[50px] hover:text-black hover:bg-[#F5EFFF]'><a href={explore} target='_blank'>Explore</a></button>
      <button className='transform hover:scale-110 transition duration-200 text-2xl m-3 mt-5 border border-[#B3C8CF] py-2 px-4 my-3 rounded-[50px] hover:text-slate-100 hover:bg-[#89A8B2]'><a href={github} target='_blank'>GitHub</a></button>
      </div>
    </div>
  )
}

export default Card;

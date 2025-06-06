import React, { useState } from 'react';

const Contact = () => {
    let [userData,setUserData]=useState({
        userName:"",
        userEmail:"",
        userMessage:""
    });

    let handleOnChange=(e)=>{
        let {name,value}=e.target;
        setUserData({...userData,[name]:value});
    }
 
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log("data submit");
         alert("message has been sent");
    }

  return (
    <div id='contact' className='bg-[#F1F0E8]'>
             <h1 className='text-center text-5xl font-bold py-3 font-serif'>Contact <span className='text-[#37b9c8] italic'>Me</span></h1>


      <form name="contact" method='POST' data-netlify="true" onSubmit={handleSubmit} action="" className='border md:w-1/2 md:ml-[25%] w-11/12 ml-[4%] p-6 rounded-3xl'>
     
      <input type="hidden" name="contact" value="contact" />

         <input className='w-full rounded-2xl p-5 mb-4 font-semibold text-xl text-slate-600'
          type="text" placeholder='Enter Your Name' name='userName' value={userData.userName} onChange={handleOnChange}/><br />
        
         <input className='w-full rounded-2xl p-5 mb-4 font-semibold text-xl text-slate-600' 
         type="email" placeholder='Enter Your Email' name='userEmail' value={userData.userEmail} onChange={handleOnChange}/><br />
        
         <textarea className='w-full rounded-2xl p-3 font-semibold text-xl text-slate-600' 
         name="userMessage" id="" placeholder='Your Message' rows={8}  value={userData.userMessage} onChange={handleOnChange}></textarea>
         
         <button type='submit' className='border bg-black border-[#B3C8CF] p-3 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                {/* <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span> */}
                <li className="relative list-none text-2xl font-semibold  text-white">Submit</li>
          </button>

      </form>
    </div>
  )
}

export default Contact;

import React from 'react'
import FetchAdvice from '../services/advicefetch'
import logo2 from './icon-dice.svg';

const handleClick = () => FetchAdvice()

export default function MainBtn() {
  return (

    // rounded full from tailwind docs to make it full circle 
    // hover drop shadow, looked up what color code for light green is 
    <button className=' transition-all mt-4 mb-4 bg-[#53ffab] p-[1.62rem] rounded-full relative top-[-2rem] hover:drop-shadow-[0_0_2em_#00FF80]' onClick={handleClick} id="mainbtn"><img src={logo2} alt="mainbtn" className='w-[100%] h-[100%] mx-auto'/></button>
  )
}


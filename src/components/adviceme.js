import React from 'react'

function AdviceCard() {
  
  return (

    // this is what's going to show up inside my card and also where my api fetch is being pushed, using IDs. 
    
      <div className='text-[#CEE9CF] text-center py-6 px-10 bg-[rgba(49,58,73,255)] rounded-tr-lg rounded-tl-lg'>  
        <p className=' pt-12 pb-8 text-lg text-[#53ffab] font-manrope uppercase' id='advice-id'>NewADVICE</p>
        <h2 className=' text-3xl pb-12 font-serif font-bold' id='advice-quote'>"Here For advice? "</h2>
      </div>
  )
}

export default AdviceCard;
import React from 'react'

function Hero() {
  return (
    <div className='h-[calc(100vh-60px)] w-full bg-pink-500 bg-[url(./images/mountain3.jpg)] bg-cover  sm:bg-[url(./images/mountain2.jpg)] sm:bg-cover'>
        <div className='h-full w-full  text-white bg-[#00000068] flex flex-col pl-6 pt-35 sm:pl-10 md:pl-15 lg:pl-22 xl:pl-32'>
            <h2 className='text-2xl font-semibold xl:text-[32px] xl:font-bold xl:tracking-wider'>Handcrafted</h2>
            <h1 className='text-4xl font-bold mt-2 mb-2 sm:text-5xl md:text-6xl md:mb-4 xl:text-7xl tracking-wide'>Bootstrap 4 Template</h1>
            <p className='text-[14px] capitalize font-semibold md:text-[16px] xl:text-[18px]'>comes with all essential sections & elements</p>
            <div className='space-x-4 mt-5'>
                <button className='h-10 w-35 bg-red-500 rounded-3xl font-semibold cursor-pointer text-[12px] uppercase hover:border-2 hover:border-white hover:bg-transparent transition all duration-700 xl:text-[15px] xl:h-12 xl:w-40'>download</button>
                <button className='h-10 w-35 border-2 border-white rounded-3xl font-semibold text-[12px] uppercase cursor-pointer hover:bg-red-500 hover:border-none transition all duration-700 xl:text-[15px] xl:h-12 xl:w-40'>get started!</button>
            </div>

        </div>
      
    </div>
  )
}

export default Hero

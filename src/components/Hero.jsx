import React from 'react'

const Hero = () => {
    return (
      <div className='w-full h-[90vh]'>
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
          alt="Seashore" 
          className='w-full h-full object-cover' 
        />
        <div className='max-w-[1140px] m-auto'>
          <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
           <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
           <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
           <p className=''>Discover amazing content and connect with us.</p>
          </div>
        </div>
      </div>
    );
  };
  
export default Hero
import React from 'react'
import Image from 'next/image'
import Stats from './components/Stats'
import Join from './components/Join'
import JoinSponsor from './components/JoinSponsor'
import SponTime from './components/SponTime'


const Description = () => {
  return (
    <div className='flex justify-between m-4 lg:m-0'>
        <div className='hidden lg:block relative h-[75vh] w-[8vh] mt-6'>
        <Image
          className='h-full w-full'
          src="/images/sol.png"
          alt="images"
          fill
          
        />
      </div>

      <div className='flex flex-col justify-center w-[65vw] space-y-4 lg:space-y-0'>
          {/* sponsor ve zaman */}
          <div className='h-[15vh] lg:h-[10vh]'>
          <SponTime/>
          </div>
            {/* alt container */}
            <div className='flex flex-col lg:flex-row h-[60vh] justify-between space-x-0 lg:space-x-10 '>
                {/* ilk üç */}
                <div className='w-[70vw] lg:w-[25vw]'>
                <Stats/>  
                </div>
                {/* sağ */}
                <div className='flex flex-col justify-between w-[70vw] lg:w-[60vw] space-y-5'>
                  {/* katıl */}
                <div>
                  <Join/>
                </div>
                {/* sponsor */}
                <div>
                  <JoinSponsor/>
                </div>
                </div>
            </div>
      </div>

      <div className='hidden lg:block relative h-[75vh] w-[8vh] mt-6'>
        <Image
          className='h-full w-full'
          src="/images/sag.png"
          alt="images"
          fill
        />
      </div> 
    </div>
  )
} 

export default Description

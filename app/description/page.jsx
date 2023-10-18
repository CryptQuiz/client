import React from 'react'
import Image from 'next/image'
import Stats from './components/Stats'
import Join from './components/Join'
import JoinSponsor from './components/JoinSponsor'
import SponTime from './components/SponTime'


const Description = () => {
  return (
    <div className='flex justify-between'>
        <div className='relative h-[75vh] w-[8vh] mt-6'>
        <Image
          className='h-full w-full'
          src="/images/sol.png"
          alt="images"
          fill
        />
      </div>

      <div className='flex flex-col justify-center w-[65vw]'>
          {/* sponsor ve zaman */}
          <div className='h-[10vh]'>
          <SponTime/>
          </div>
            {/* alt container */}
            <div className='flex flex-row h-[60vh] justify-between space-x-10'>
                {/* ilk üç */}
                <div className='w-[25vw]'>
                <Stats/>  
                </div>
                {/* sağ */}
                <div className='flex flex-col justify-between w-[60vw] space-y-5'>
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

      <div className='relative h-[75vh] w-[8vh] mt-6'>
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

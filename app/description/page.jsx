import React from 'react'
import Join from '@/components/join'
import JoinSponsor from '@/components/joinSponsor'
import Stats from '@/components/stats'

const Description = () => {
  return (
    <div className='flex-grow mt-8 mx-8'>
          {/* sponsor adı ve zaman */}
          <div className='flex flex-row w-full justify-between'>
            <div className='w-3/5 px-5 py-1 text-center bg-neu-orange text-black text-32 font-bold rounded-20 border border-black border-r-8 border-b-8'>Truefeedback Quiz Yarışması</div>
            <div className='w-1/4 flex flex-row justify-around items-center bg-neu-green3 font-bold text-black border rounded-20 border-black border-r-8 border-b-8'>
              <div className='text-32'>15 Ekim</div>
              <div className='text-2xl'>
                <div>14</div>
                <div>00</div>
              </div>
            </div>
          </div>
        
        {/* alt container */}
        <div className='container flex h-full mt-8 space-x-10'>
            {/* ilk üç */}
            <Stats/>
            <div className='flex flex-col w-5/6 space-y-8 h-5/6'> 
            {/* katıl */}
                <Join/>
                {/* sponsorlar */}
                <JoinSponsor/>
            </div>
        </div>
        </div>
  
      

  )
}

export default Description

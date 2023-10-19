import React from 'react'

const SponTime = () => {
  return (
    <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-center lg:justify-between'>
            <div className='w-[70vw] h-[8vh] lg:w-[40vw] lg:h-[7vh] text-center bg-neu-orange text-black text-xl lg:text-32 p-1 lg:p-3 font-bold rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8 font-lexend'>Truefeedback Quiz Yarışması</div>
            <div className='w-[50vw] h-[5vh] lg:w-[20vw] lg:h-[7vh] flex flex-row justify-around items-center bg-neu-green3 font-bold text-black border rounded-10 lg:rounded-20 border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8 font-lexend'>
              <div className='text-sm lg:text-32'>15 Ekim</div>
              <div className='text-sm lg:text-2xl flex flex-row lg:flex-col'>
                <div>14</div>
                <span className='block lg:hidden text-sm'>:</span>
                <div>00</div>
              </div>  
            </div>  
          </div>  
  )
}

export default SponTime

import React from 'react'

const HomeLogo = () => {
  return (
    <div className='w-[80vw] h-[20vh] lg:w-[38vw] lg:h-[80vh] flex flex-col justify-between space-y-2'>
        <div className='w-[80vw] h-[20vh] lg:w-[38vw] lg:h-[39vh] text-center bg-neu-white rounded-20 lg:rounded-50 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8'>
          <h1 className='w-full h-full font-bold text-32 font-archivo'>Logo</h1>
        </div>
        <div className='hidden lg:block w-[38vw] h-[39vh] text-center bg-neu-white rounded-50 border border-black border-r-8 border-b-8'>
        <h1 className='w-full h-full font-bold text-32 font-archivo'>Bla Bla Bla</h1>
        </div>
      </div>
  )
}

export default HomeLogo

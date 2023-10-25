import React from 'react'
import Image from 'next/image'

const StatsCup = () => {
  return (
    <div className='flex flex-col w-full h-1/2 bg-neu-white border border-black border-b-8 border-r-8 rounded-50 px-10 py-6'>
        <h1 className='text-32 font-bold font-archivo'>Stats</h1>
        <div className='flex flex-row justify-center items-center space-x-32'>
        <div>
          <Image
          src="/images/bronzeCup.png" 
          alt='silverCup'
          width={88}
          height={150}
          />
        </div>
        <div>
          <Image
          src="/images/goldCup.png"
          alt='silverCup'
          width={157}
          height={260}
          />
        </div>
        <div>
          <Image
          src="/images/silverCup.png"
          alt='silverCup'
          width={120}
          height={200}
          />
        </div>
        </div>
      </div>
  )
}

export default StatsCup

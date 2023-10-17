import React from 'react'
import Image from 'next/image'

const JoinSponsor = () => {
  return (
    <div className='flex flex-row justify-between items-center h-1/3 space-x-6'>
                    <div className='flex flex-col items-center justify-around text-center bg-white p-4 w-1/4 h-full rounded-20 border border-black border-r-8 border-b-8'>
                        <Image
                        className='object-cover'
                    src="/images/spon11.png"
                    alt='images' 
                    width={100}
                    height={100}
                        />
                        <div className='text-black font-semibold'>Bla bla Coin</div>
                    </div>
                    <div className='flex flex-col items-center justify-around text-center bg-white p-4 w-1/4 h-full rounded-20 border border-black border-r-8 border-b-8'>
                    <Image
                    className='object-cover'
                    src="/images/spon22.png"
                    alt='images'
                    width={100}
                    height={100}
                        />
                        <div className='text-black font-semibold'>Bla bla Coin</div>
                    </div>
                    <div className='flex flex-col items-center justify-around text-center bg-white p-4 w-1/4 h-full rounded-20 border border-black border-r-8 border-b-8'>
                    <Image
                    src="/images/spon33.png"
                    alt='images'
                    width={100}
                    height={100}
                        />
                        <div className='text-black font-semibold'>Bla bla Coin</div>
                    </div>
                    <div className='flex flex-col items-center justify-around text-center bg-white p-4 w-1/4 h-full rounded-20 border border-black border-r-8 border-b-8'>
                    <Image
                    src="/images/spon44.png"
                    alt='images'
                    width={91}
                    height={91}
                        />
                        <div className='text-black font-semibold'>Bla bla Coin</div>
                    </div>
                </div>
  )
}

export default JoinSponsor

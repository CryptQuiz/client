import React from 'react'
import Image from 'next/image'

const LeaderBoard = () => {
  return (
    <div className=' mx-auto w-full px-10'>
      <h1 className='text-32 text-black font-bold text-center py-12 tracking-widest'>Truefeedback Quiz Yarışması Sonuçları</h1>
      {/* liderlik */}

    <div className='flex flex-row '>
        <div className='flex flex-row justify-between items-center text-center w-2/3 space-x-12'>
            <div className='h-3/5 w-1/3 space-y-5'>
                <div>
                    <Image
                    className='w-44 h-44 object-cover rounded-full'
                    src = '/images/icardi.jpg'
                    alt = 'icardi'
                    width = {210}
                    height = {210}
                    />
                </div>
                <div className='text-2xl text-black font-bold'>Osman Bey</div>
                <div className='bg-neu-brown text-5xl py-6 font-bold mx-auto rounded-20 border border-black border-r-8 border-b-8'>3</div>
                <div className='bg-white text-black font-bold text-2xl py-4  rounded-20 border  border-black border-r-8 border-b-8'>1235 puan</div>
            </div>
            <div className='h-full w-1/3 space-y-5'>
                <div>
                    <Image
                    className='w-44 h-44 object-cover rounded-full drop-shadow-[2px_2px_rgba(0,0,0,40)]'
                    src="/images/icardi.jpg"
                    alt = 'icardi'
                    width = {210}
                    height = {210}
                    />
                </div>
                <div className='text-2xl text-black font-bold'>Osman Bey</div>
                <div className='bg-neu-yellow3 text-8xl py-12 font-bold mx-auto rounded-20 border border-black border-r-8 border-b-8'>1</div>
                <div className='bg-white text-black font-bold text-2xl py-4  rounded-20 border border-black border-r-8 border-b-8'>1235 puan</div>
            </div>
            <div className='h-4/5 w-1/3 space-y-5'>
                <div>
                    <Image
                    className='w-44 h-44 object-cover rounded-full'
                    src="/images/icardi.jpg"
                    alt = 'icardi'
                    width = {210}
                    height = {210}
                    />
                    </div>
                <div className='text-2xl text-black font-bold'>Osman Bey</div>
                <div className='bg-neu-gray text-6xl py-9 font-bold mx-auto rounded-20 border border-black border-r-8 border-b-8'>2</div>
                <div className='bg-white text-black font-bold text-2xl py-4  rounded-20 border border-black border-r-8 border-b-8'>1235 puan</div>
            </div>
        </div>
        {/* leader boards */}
        <div className='w-1/3'>
            liderlik
        </div>
    </div>
    </div>
  )
}

export default LeaderBoard

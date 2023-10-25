import React from 'react'
import Image from 'next/image'

const LeaderBoard = () => {
  return (
    <div className=' mx-auto w-full px-10 py-6'>
      <h1 className='text-32 text-black font-bold text-center py-12 tracking-widest'>Truefeedback Quiz Yarışması Sonuçları</h1>

      {/* liderlik */}
    <div className='flex flex-row '>
        <div className='flex flex-row justify-between items-center text-center w-2/3 space-x-12'>
            <div className='h-3/5 w-1/3 space-y-4'>
                <div className="w-3/4 relative pt-[75%]">
                    <Image
                        src="/images/icardi.jpg"
                        alt="profile"
                        objectFit="cover"
                        fill
                        className="w-full h-full top-0 left-0 object-cover rounded-full border-8 border-neu-brown"
                    />
                </div>
                <div className='text-2xl text-black font-bold'>Osman Bey</div>
                <div className='bg-neu-brown text-5xl py-6 font-bold mx-auto rounded-20 border border-black border-r-8 border-b-8'>3</div>
                <div className='bg-white text-black font-bold text-2xl py-4  rounded-20 border  border-black border-r-8 border-b-8'>1235 puan</div>
            </div>
            <div className='h-full w-1/3 space-y-5'>
                <div className="w-3/4 relative pt-[75%]">
                    <Image
                        src="/images/icardi.jpg"
                        alt="profile"
                        objectFit="cover"
                        fill
                        className="w-full h-full top-0 left-0 object-cover rounded-full border-8 border-neu-yellow3"
                    />
                </div>
                <div className='text-2xl text-black font-bold'>Osman Bey</div>
                <div className='bg-neu-yellow3 text-8xl py-12 font-bold mx-auto rounded-20 border border-black border-r-8 border-b-8'>1</div>
                <div className='bg-white text-black font-bold text-2xl py-4  rounded-20 border border-black border-r-8 border-b-8'>1235 puan</div>
            </div>
            <div className='h-4/5 w-1/3 space-y-5'>
            <div className="w-3/4 relative pt-[75%]">
                    <Image
                        src="/images/icardi.jpg"
                        alt="profile"
                        objectFit="cover"
                        fill
                        className="w-full h-full top-0 left-0 object-cover rounded-full border-8 border-neu-gray"
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

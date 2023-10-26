import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col h-[42vh] lg:h-[65vh] space-y-4 font-bold '>
                    <div className='flex flex-row justify-between h-[12vh] lg:h-[20vh] bg-neu-blue4 rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8'>
                        <div className='text-6xl lg:text-8xl text-black ml-4 font-lexend'>1</div>
                        <div className='flex flex-col h-full justify-center text-sm lg:text-xl text-black font-semibold lg:font-bold font-public space-y-2'>
                            <div className='mr-4'>100.000 TFBX</div>
                            <div className='mr-4'>TFB Kupa</div>
                            <div className='mr-4'>Sticker Pack</div>
                            <div className='mr-4'>Mouse Pad</div>   
                        </div>
                    </div>
                    <div className='flex flex-row justify-between h-[12vh] lg:h-[20vh] bg-neu-green4 rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8'>
                        <div className='text-6xl lg:text-8xl text-black ml-4 font-lexend'>2</div>
                        <div className='flex flex-col justify-center text-sm lg:text-xl text-black font-semibold lg:font-bold font-public space-y-2'>
                            <div className='mr-4'>20.000 TFBX</div>
                            <div className='mr-4'>TFB Kupa</div>
                            <div className='mr-4'>Mouse Pad</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between h-[12vh] lg:h-[20vh] bg-neu-pink4 rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8'>
                        <div className='text-6xl lg:text-8xl text-black ml-4 font-lexend'>3</div>
                        <div className='flex flex-col justify-center text-sm lg:text-xl text-black font-semibold lg:font-bold font-public space-y-2'>
                            <div className='mr-4'>1.000 TFBX</div>
                            <div className='mr-4'>TFB Kupa</div>
                            <div className='mr-4'>Sticker Pack</div>
                        </div>
                    </div>
            </div>
  )
}

export default Stats

import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col w-full h-full space-y-4 font-bold '>
                    <div className='flex flex-row justify-between h-1/3 bg-neu-blue4 w-full rounded-20 border border-black border-r-8 border-b-8'>
                        <div className='text-8xl text-black ml-4 '>1</div>
                        <div className='flex flex-col justify-evenly text-xl text-black'>
                            <div className='mr-4'>100.000 TFBX</div>
                            <div className='mr-4'>TFB Kupa</div>
                            <div className='mr-4'>Sticker Pack</div>
                            <div className='mr-4'>Mouse Pad</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between h-1/3 bg-neu-green4 w-full rounded-20 border border-black border-r-8 border-b-8'>
                        <div className='text-8xl text-black ml-4'>2</div>
                        <div className='flex flex-col justify-evenly text-xl text-black'>
                            <div className='mr-4'>20.000 TFBX</div>
                            <div className='mr-4'>TFB Kupa</div>
                            <div className='mr-4'>Mouse Pad</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between h-1/3 bg-neu-pink4 w-full rounded-20 border border-black border-r-8 border-b-8'>
                        <div className='text-8xl text-black ml-4'>3</div>
                        <div className='flex flex-col justify-evenly text-xl text-black'>
                            <div className='mr-4'>1.000 TFBX</div>
                            <div className='mr-4'>TFB Kupa</div>
                            <div className='mr-4'>Sticker Pack</div>
                        </div>
                    </div>
            </div>
  )
}

export default Stats

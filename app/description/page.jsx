import React from 'react'
import Image from 'next/image'

const Description = () => {
  return (
    <div>
  <div className="bg-neu-yellow min-h-screen flex justify-center items-center">
    <div className="container w-4/5 bg-neu-white rounded-40 border border-black border-r-8 border-b-8 h-5/6">
      <div className="mt-3 mb-12 flex justify-between">
        <div>
          <Image
            src="/images/sol.png"
            alt="images"
            height={762}
            width={100}
          />
        </div>
        {/* sponsor adı ve zaman */}
        <div className='flex-grow mt-8 mx-8'>
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
        <div className='flex flex-row  h-full mt-8 space-x-10'>
            {/* ilk üç */}
            <div className='flex flex-col w-1/3 space-y-4 font-bold h-5/6'>
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
            <div className='flex flex-col w-full space-y-8 h-5/6'> 
            {/* katıl */}
                <div className=' bg-neu-purple2 flex flex-col justify-between h-2/3 p-5 rounded-20 border border-black border-r-8 border-b-8'>
                    <div className='flex flex-row justify-between'> 
                        <div className='flex flex-row space-x-3 items-center'>
                            <div>
                                <Image 
                                src="/images/clock.png"
                                alt='clock'
                                height={48}
                                width={48}
                                />
                            </div>
                            <div className='text-xl font-bold'>00:25</div>
                        </div>
                        <div className='flex flex-row space-x-5 items-center'>
                            <div className='text-xl font-bold'>1345 kişi</div>
                            <div>
                                <Image
                                src="/images/people.png"
                                alt='clock'
                                height={48}
                                width={48}
                                />
                            </div>
                        </div>
                    </div>  
                
                        <div  className='flex flex-row justify-center relative'>
                            <div className='absolute left-40 -top-4'>
                                <Image
                                src="/images/katil.png"     
                                alt='image'
                                height={38}
                                width={60}
                                />
                            </div>  
                            <div className='text-8xl font-bold '><span className='drop-shadow-[2px_2px_rgba(0,0,0,40)]'>KATIL</span></div>
                        </div>
                        
                        <div className='text-xs font-bold mx-24 text-center'>
                        <span className='text-neu-yellow'>ÖNEMLİ NOT:</span> Quiz başladıktan sonra 1 dakika içinde katılım sağlamanız gerekmektedir.
                        </div>
                    
                </div>
                {/* sponsorlar */}
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
            </div>
        </div>
        </div>
        {/* sağ resim */}
        <div>
          <Image
            src="/images/sag.png"
            alt="images"
            height={762}
            width={100}
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Description

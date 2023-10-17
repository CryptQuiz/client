import React from 'react'
import Image from 'next/image'

const Join = () => {
  return (
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
  )
}

export default Join

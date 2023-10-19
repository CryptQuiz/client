import React from 'react'
import Image from 'next/image'

const Join = () => {
  return (
    <div className=' bg-neu-purple2 h-[11vh] lg:h-[41vh] text-white flex flex-col justify-between p-0 lg:p-5 rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8'>
                    <div className='hidden lg:flex flex-row justify-between'> 
                        <div className='flex flex-row space-x-3 items-center'>
                            <div>
                                <Image
                                className='max-w-12 max-h-12' 
                                src="/images/clock.png"
                                alt='clock'
                                height={48}
                                width={48}
                                />
                            </div>
                            <div className='text-xl font-bold'>00:25</div>
                        </div>
                        <div className='hidden lg:flex flex-row space-x-5 items-center'>
                            <div className='text-xl font-bold'>1345 kişi</div>
                            <div>
                                <Image
                                className='max-w-12 max-h-12'
                                src="/images/people.png"
                                alt='clock'
                                height={48}
                                width={48}
                                />
                            </div>
                        </div>
                    </div>  
                
                        <div  className='flex flex-row justify-center items-center'>
                            <div className='hidden lg:block relative left-4 -top-4 w-12 h-8 max-w-15 max-h-10'>
                                <Image
                                src="/images/katil.png"     
                                alt='image'
                                fill
                                />
                            </div>  
                            <div className='text-32 lg:text-8xl font-bold p-4 lg:p-0'><span className='drop-shadow-[2px_2px_rgba(0,0,0,40)]'>KATIL</span></div>
                        </div>
                        
                        <div className='hidden lg:block text-xs font-bold mx-24 text-center'>
                        <span className='text-neu-yellow'>ÖNEMLİ NOT:</span> Quiz başladıktan sonra 1 dakika içinde katılım sağlamanız gerekmektedir.
                        </div>
                    
                </div>
  )
}

export default Join

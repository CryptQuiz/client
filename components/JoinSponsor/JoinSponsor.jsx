import React from 'react'
import Image from 'next/image'

const JoinSponsor = () => {
    const sponsorArr=[
        {
        img:"/images/spon11.png",
        compName:"bla bla coin"
    },
    {
        img:"/images/spon22.png",
        compName:"bla bla coin"

    },
    {
        img:"/images/spon33.png",
        compName:"bla bla coin"

    },
    {
        img:"/images/spon44.png",
        compName:"bla bla coin"

    },
]
  return (
    <div className='flex flex-row justify-between items-center h-[8vh] lg:h-[20vh] space-x-3 lg:space-x-6 font-public'>
        {sponsorArr.map((i,index)=>(
            <div key={index} className='flex relative flex-col items-center justify-around text-center
             bg-white p-1 lg:p-4 w-1/4 h-full rounded-10 lg:rounded-20 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8'>
                        <div 
                       style={{width: '90%', height: '90%', position: 'relative'}}
                        >
                        <Image                        
                    src={i.img}
                    alt='images' 
                    layout='fill'
                    objectFit='contain'
                    style={{
                       boxSizing:"10px"
                      }}
                        />
                        </div>
                        <div className='text-black font-semibold text-8 lg:text-base'>{i.compName}</div>
                    </div>
        ))}
                     
                 
                </div>
  )
}

export default JoinSponsor
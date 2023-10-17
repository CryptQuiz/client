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
    <div className='flex flex-row justify-between items-center h-1/3 space-x-6'>
        {sponsorArr.map((i,index)=>(
            <div key={index} className='flex relative gap-2 flex-col items-center justify-around text-center
             bg-white p-4 w-1/4 h-full rounded-20 border border-black border-r-8 border-b-8'>
                        <div 
                       style={{width: '100%', height: '100%', position: 'relative'}}
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
                        <div className='text-black font-semibold'>{i.compName}</div>
                    </div>
        ))}
                     
                 
                </div>
  )
}

export default JoinSponsor
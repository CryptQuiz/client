import React from "react";
import Image from "next/image";

const Sponsor = () => {
  const sponsorArr=[
    {
      img:"/images/spon1.png",
    },
    {
      img:"/images/spon2.png",
    },
    {
      img:"/images/spon3.png",
    },
    {
      img:"/images/spon4.png",
    },
      ]
  return (
    <div className='flex flex-row justify-between items-center h-[6vh] lg:h-[20vh] space-x-3 lg:space-x-6'>
    {sponsorArr.map((i,index)=>(  
        <div key={index} className='flex lg:hidden relative flex-col items-center justify-around text-center
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
          </div>
    ))}         
    </div>
    
  );
};

export default Sponsor;

import React from 'react'
import Image from 'next/image'

const Question = () => {
  return (
  
      <div className="h-[22vh] lg:h-[25vh] bg-neu-orange mb-4 lg:mb-10 flex flex-row relative items-center justify-center rounded-20 border border-black border-r-4 border-b-4">
              <div className="hidden lg:block bg-neu-blue text-base md:text-xl lg:text-3xl absolute -top-4 -left-12 lg:py-1 px-2 lg:px-4 rounded-20 border border-black border-r-4 border-b-4 font-archivo">
                3/10
              </div>
              <p className="text-xl lg:text-2xl font-bold text-black font-public text-center">
                Blockchain teknolojisinin temel özelliği nedir? 
              </p>
              <div className="hidden lg:block absolute -top-14 -right-14">
                <Image
                  src="/images/star.png"
                  alt="images"
                  height={121}
                  width={121}
                />
              </div>
            </div>
    
  )
}

export default Question

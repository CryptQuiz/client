import React from 'react'
import Image from 'next/image'

const Question = () => {
  return (
    <div>
      <div className="flex-none h-48 bg-neu-orange w-10/12 mx-auto flex flex-row relative items-center justify-center mt-10 rounded-20 border border-black border-r-4 border-b-4">
              <div className="bg-neu-blue w-30 text-3xl absolute -top-4 -left-12 py-1 px-4 rounded-20 border border-black border-r-4 border-b-4">
                3/10
              </div>
              <p className="text-2xl font-bold text-black">
                Blockchain teknolojisinin temel özelliği nedir?
              </p>
              <div className="absolute -top-14 -right-14">
                <Image
                  src="/images/star.png"
                  alt="images"
                  height={121}
                  width={121}
                />
              </div>
            </div>
    </div>
  )
}

export default Question

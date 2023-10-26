import React from 'react'
import Link from 'next/link'
import Sponsor from '@/components/Sponsor/Sponsor'

const Quizs = () => {
  const quizArr=[
    {
      ranking : "1",
      award: "100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad",
      color : "bg-neu-blue4"
    },
    {
      ranking : "2",
      award: "100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad",
      color : "bg-neu-green4"
    },
    {
      ranking : "3",
      award: "100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad",
      color : "bg-neu-pink4"
    },
  ]

  return (
    <div className='flex flex-col w-[80vw] lg:w-[42vw] h-[55vh] lg:h-[80vh] bg-neu-white rounded-20 lg:rounded-50 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8 px-5 lg:px-8 py-5 lg:py-4 space-y-3 mx-auto lg:mx-0'>
        <div className='text-32 font-bold font-archivo'>Quizler</div>
        <div className='space-y-5 whitespace-nowrap overflow-hidden text-ellipsis'>
          <div className='flex flex-col h-[40vh] lg:h-[21vh] bg-neu-orange rounded-20 px-3 lg:px-4 py-3 space-y-3 border border-black border-r-2 border-b-2'>
            <div className='flex flex-row justify-between items-center w-full lg:text-xl font-bold font-public whitespace-nowrap overflow-hidden text-ellipsis'>
              <div className=' w-[40vw] lg:[20vw] flex-nowrap overflow-hidden text-ellipsis text-base'>Truefeedback Blockchain Quiz</div>
              <div className=' w-[22vw] lg:[15vw] text-xs'>15 Ekim / 14:00</div>
            </div>
            <div className='flex flex-col items-center h-[30vh] lg:flex-row space-x-3 space-y-4'> 
              <div className='flex flex-col w-[62vw] lg:w-full space-y-2 flex-nowrap overflow-hidden text-ellipsis'>
                {quizArr.map((i,index)=>(
                  <div key={index} className={`h-[5vh] lg:h-[4vh] ${i.color} font-public rounded-10 border border-black border-r-2 border-b-2 px-2 whitespace-nowrap `}>
                  <h3 className='text-sm font-medium flex-nowrap overflow-hidden text-ellipsis'>
                    <span className='text-2xl font-bold'>{i.ranking}.</span>
                    {i.award}</h3> 
                </div>
                ))}
              </div>
              <div className='flex flex-col justify-between items-center w-[40vw] lg:w-[16vw] space-y-4 lg:space-y-0'>
                <Link href="/description" className='bg-neu-purple2 h-4/5 lg:h-2/3 w-[62vw] lg:w-[16vw] rounded-10 border border-black border-r-2 border-b-2 px-0 lg:px-2'>
                  <h1 className='text-white font-bold text-xl lg:text-32 font-lexend w-full h-[6vh] lg:h-full text-center'>Detaylar</h1>
                </Link>
                <div className='h-[4vh] lg:h-[5vh] w-[60vw] lg:w-[16vw]'>
                  <Sponsor/>
                </div> 
              </div>  
            </div>
          </div>
          
          
          
        </div>
      </div>
  )
}

export default Quizs

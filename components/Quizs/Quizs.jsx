import React from 'react'
import Sponsor from '../Sponsor/Sponsor'

const Quizs = () => {
  const quizsArr = [
    {
      ranking : "1",
      award: "100.000 TFBX, TFB Kupa, Sticker Pack, Mouse Pad",
      color : "bg-neu-blue4"

    }
  ]
  return (
    <div className='w-full lg:w-1/2 h-full bg-neu-white rounded-20 lg:rounded-50 border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8  p-5 lg:py-6 lg:px-8 space-y-4 lg:space-y-5 overflow-y-auto'>
      <h1 className='font-bold font-archivo text-32 pl-2'>Quizler</h1>
      <div className='flex flex-col h-5/6 w-full space-y-5'>
        <div className='bg-neu-orange basis-1/3 rounded-20 border border-black border-r-2 border-b-2 px-3 lg:px-4 py-3 space-y-3'>
          {/* quiz adı - quiz saati */}
          <div className='flex flex-row justify-between items-center'>
            <h1 className='text-base w-4/6 lg:text-2xl font-bold font-public whitespace-nowrap overflow-hidden text-ellipsis text-start'>TrueFeedBack Quiz</h1> 
            <h2 className='text-xs lg:text-xl w-2/6 font-bold font-public text-end'>15 Ekim / 14:00</h2>
          </div>
          {/* ödüller - katıl - sponsor */}
          <div className='flex flex-col lg:flex-row w-full space-x-0 lg:space-x-3 space-y-3 lg:space-y-0'>
            {/* ödüller */}
            <div className='flex flex-col basis-full lg:basis-3/5 space-y-3'>
              <div className='basis-1/3 w-full bg-neu-blue4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>1. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
              <div className='basis-1/3 w-full bg-neu-green4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>2. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
              <div className='basis-1/3 w-full bg-neu-pink4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>3. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
            </div>
            <div className='flex flex-col basis-full lg:basis-2/5 space-y-3'>
            <h1 className='basis-2/3 bg-neu-purple2 border border-black border-r-2 border-b-2 rounded-10 text-white text-xl lg:text-32 font-lexend text-center py-4 lg:py-9'>Detaylar</h1>
              <div className='basis-1/3 bg-white'><Sponsor/></div>
            </div>
          </div>
        </div>
        <div className='bg-neu-orange basis-1/3 rounded-20 border border-black border-r-2 border-b-2 px-4 py-3 space-y-3'>
          {/* quiz adı - quiz saati */}
          <div className='flex flex-row justify-between items-center'>
            <h1 className='text-base w-4/6 lg:text-2xl font-bold font-public whitespace-nowrap overflow-hidden text-ellipsis text-start'>TrueFeedBack Quiz</h1> 
            <h2 className='text-xs lg:text-xl w-2/6 font-bold font-public text-end'>15 Ekim / 14:00</h2>
          </div>
          {/* ödüller - katıl - sponsor */}
          <div className='flex flex-col lg:flex-row w-full space-x-0 lg:space-x-3 space-y-3 lg:space-y-0'>
            {/* ödüller */}
            <div className='flex flex-col basis-full lg:basis-3/5 space-y-3'>
              <div className='basis-1/3 w-full bg-neu-blue4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>1. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
              <div className='basis-1/3 w-full bg-neu-green4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>2. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
              <div className='basis-1/3 w-full bg-neu-pink4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>3. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
            </div>
            <div className='flex flex-col basis-full lg:basis-2/5 space-y-3'>
              <h1 className='basis-2/3 bg-neu-purple2 border border-black border-r-2 border-b-2 rounded-10 text-white text-xl lg:text-32 font-lexend text-center py-4 lg:py-9'>Detaylar</h1>
              <div className='basis-1/3 bg-white'>Sponsor</div>
            </div>
          </div>
        </div>
        <div className='bg-neu-orange basis-1/3 rounded-20 border border-black border-r-2 border-b-2 px-4 py-3 space-y-3'>
          {/* quiz adı - quiz saati */}
          <div className='flex flex-row justify-between items-center'>
            <h1 className='text-base w-4/6 lg:text-2xl font-bold font-public whitespace-nowrap overflow-hidden text-ellipsis text-start'>TrueFeedBack Quiz</h1> 
            <h2 className='text-xs lg:text-xl w-2/6 font-bold font-public text-end'>15 Ekim / 14:00</h2>
          </div>
          {/* ödüller - katıl - sponsor */}
          <div className='flex flex-col lg:flex-row w-full space-x-0 lg:space-x-3 space-y-3 lg:space-y-0'>
            {/* ödüller */}
            <div className='flex flex-col basis-full lg:basis-3/5 space-y-3'>
              <div className='basis-1/3 w-full bg-neu-blue4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>1. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
              <div className='basis-1/3 w-full bg-neu-green4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>2. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
              <div className='basis-1/3 w-full bg-neu-pink4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>3. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
            </div>
            <div className='flex flex-col basis-full lg:basis-2/5 space-y-3'>
            <h1 className='basis-2/3 bg-neu-purple2 border border-black border-r-2 border-b-2 rounded-10 text-white text-xl lg:text-32 font-lexend text-center py-4 lg:py-9'>Detaylar</h1>
              <div className='basis-1/3 bg-white'>Sponsor</div>
            </div>
          </div>
        </div>
        <div className='bg-neu-orange basis-1/3 rounded-20 border border-black border-r-2 border-b-2 px-4 py-3 space-y-3'>
          {/* quiz adı - quiz saati */}
          <div className='flex flex-row justify-between items-center'>
            <h1 className='text-base w-4/6 lg:text-2xl font-bold font-public whitespace-nowrap overflow-hidden text-ellipsis text-start'>TrueFeedBack Quiz</h1> 
            <h2 className='text-xs lg:text-xl w-2/6 font-bold font-public text-end'>15 Ekim / 14:00</h2>
          </div>
          {/* ödüller - katıl - sponsor */}
          <div className='flex flex-col lg:flex-row w-full space-x-0 lg:space-x-3 space-y-3 lg:space-y-0'>
            {/* ödüller */}
            <div className='flex flex-col basis-full lg:basis-3/5 space-y-3'>
              <div className='basis-1/3 w-full bg-neu-blue4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>1. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
              <div className='basis-1/3 w-full bg-neu-green4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>2. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
              <div className='basis-1/3 w-full bg-neu-pink4 rounded-10 border border-black border-b-2 border-r-2 py-3 px-3'>3. 100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</div>
            </div>
            <div className='flex flex-col basis-full lg:basis-2/5 space-y-3'>
            <h1 className='basis-2/3 bg-neu-purple2 border border-black border-r-2 border-b-2 rounded-10 text-white text-xl lg:text-32 font-lexend text-center py-4 lg:py-9'>Detaylar</h1>
              <div className='basis-1/3 bg-white'>Sponsor</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Quizs

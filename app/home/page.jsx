import Sponsor from '@/components/Sponsor/Sponsor'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row w-[80vw] h-[80vh] space-x-8 space-y-8 lg:space-y-0'>
      <div className='w-[80vw] h-[45vh] lg:w-[38vw] lg:h-[80vh] flex flex-col justify-between space-y-8'>
        <div className='w-[80vw] h-[20vh] lg:w-[38vw] lg:h-[38vh] text-center bg-neu-white rounded-50 border border-black border-r-8 border-b-8'>
          <h1 className='w-full h-full font-bold text-32 font-archivo'>Logo</h1>
        </div>
        <div className='hidden lg:block w-[38vw] h-[38vh] text-center bg-neu-white rounded-50 border border-black border-r-8 border-b-8'>
        <h1 className='w-full h-full font-bold text-32 font-archivo'>Bla Bla Bla</h1>
        </div>
      </div>
      <div className='w-[80vw] lg:w-[42vw] h-[80vh] items-center bg-neu-white rounded-50 border border-black border-r-8 border-b-8 px-4 lg:px-8 py-0 lg:py-4 space-y-3 mx-auto lg:mx-0'>
        <div className='text-32 font-bold font-archivo'>Quizler</div>
        <div className='space-y-5'>
          <div className='h-[40vh] lg:h-[21vh] bg-neu-orange rounded-20 px-0 lg:px-4 py-3 space-y-3'>
            <div className='flex flex-row justify-between items-center text-xl font-bold font-public'>
              <div>Truefeedback Blockchain Quiz</div>
              <div>15 Ekim / 14:00</div>
            </div>
            <div className='flex flex-col lg:flex-row space-x-3'>
              <div className='flex flex-col w-[60vw] lg:w-[20vw] space-y-2 '>
                <div className='h-[4vh] bg-neu-blue4 font-public rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h3 className='text-sm font-medium'>
                    <span className='text-2xl font-bold'>1.</span> 
                    100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</h3>
                </div>  
                <div className='h-[4vh] bg-neu-green4 font-public rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h3 className='text-sm font-medium'>
                    <span className='text-2xl font-bold'>1.</span> 
                    100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</h3>
                </div>
                <div className='h-[4vh] bg-neu-pink4 font-public rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h3 className='text-sm font-medium'>
                    <span className='text-2xl font-bold'>1.</span> 
                    100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</h3>
                </div>
              </div>
              <div className='flex flex-col justify-between w-[16vw]'>
                <Link href="/description" className='bg-neu-purple2 h-[9vh] w-[60vw] lg:w-[16vw] rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h1 className='text-white font-bold text-32 font-lexend w-full h-full text-center'>Detaylar</h1>
                </Link>
                <div className='h-[4vh] lg:h-[5vh] w-[60vw] lg:w-[16vw]'>
                  <Sponsor/>
                </div> 
              </div>
            </div>
          </div>
          <div className='h-[21vh] bg-neu-orange rounded-20 px-4 py-3 space-y-3'>
            <div className='flex flex-row justify-between items-center text-xl font-bold font-public'>
              <div>Truefeedback Blockchain Quiz</div>
              <div>15 Ekim / 14:00</div>
            </div>
            <div className='flex flex-row space-x-3'>
              <div className='flex flex-col w-[20vw] space-y-2 '>
                <div className='h-[4vh] bg-neu-blue4 font-public rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h3 className='text-sm font-medium'>
                    <span className='text-2xl font-bold'>1.</span> 
                    100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</h3>
                </div>
                <div className='h-[4vh] bg-neu-green4 font-public rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h3 className='text-sm font-medium'>
                    <span className='text-2xl font-bold'>1.</span> 
                    100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</h3>
                </div>
                <div className='h-[4vh] bg-neu-pink4 font-public rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h3 className='text-sm font-medium'>
                    <span className='text-2xl font-bold'>1.</span> 
                    100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</h3>
                </div>
              </div>
              <div className='flex flex-col justify-between w-[16vw]'>
                <Link href="/description" className='bg-neu-purple2 h-[9vh] rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h1 className='text-white font-bold text-32 font-lexend w-full h-full text-center'>Detaylar</h1>
                </Link>
                <div className='h-[5vh] w-[16vw]'>
                  <Sponsor/>
                </div> 
              </div>
            </div>
          </div>
          <div className='h-[21vh] bg-neu-orange rounded-20 px-4 py-3 space-y-3'>
            <div className='flex flex-row justify-between items-center text-xl font-bold font-public'>
              <div>Truefeedback Blockchain Quiz</div>
              <div>15 Ekim / 14:00</div>
            </div>
            <div className='flex flex-row space-x-3'>
              <div className='flex flex-col w-[20vw] space-y-2 '>
                <div className='h-[4vh] bg-neu-blue4 font-public rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h3 className='text-sm font-medium'>
                    <span className='text-2xl font-bold'>1.</span> 
                    100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</h3>
                </div>
                <div className='h-[4vh] bg-neu-green4 font-public rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h3 className='text-sm font-medium'>
                    <span className='text-2xl font-bold'>1.</span> 
                    100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</h3>
                </div>
                <div className='h-[4vh] bg-neu-pink4 font-public rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h3 className='text-sm font-medium'>
                    <span className='text-2xl font-bold'>1.</span> 
                    100.000 TFBX, TFB Kupa, Sticker Pack, Mouse P..</h3>
                </div>
              </div>
              <div className='flex flex-col justify-between w-[16vw]'>
                <Link href="/description" className='bg-neu-purple2 h-[9vh] rounded-10 border border-black border-r-2 border-b-2 px-2'>
                  <h1 className='text-white font-bold text-32 font-lexend w-full h-full text-center'>Detaylar</h1>
                </Link>
                <div className='h-[5vh] w-[16vw]'>
                  <Sponsor/>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

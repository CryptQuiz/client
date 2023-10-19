import React from 'react'
import Image from 'next/image'
import SponsorName from './components/SponsorName'
import Question from './components/Question'
import Sponsor from './components/sponsor'
import Option from './components/Option'


const QuizPage = () => {
  return (
    <div>
        <div>
        <div className="h-4 bg-red-500 w-full rounded-t-40"></div>
        </div>
    <div className='flex justify-between'>
        <div className='hidden lg:block relative h-[75vh] w-[8vh] mt-6'>
        <Image
          className='h-full w-full'
          src="/images/sol.png"
          alt="images"
          fill
        />
      </div>
      <div className='w-[81vw] lg:w-[60vw] py-5 l:py-0 m-4 lg:m-0'>
        {/* Sponsor Namesi */}
        <div className='h-[8vh] lg:h-[15vh]'>
        <SponsorName/>

        </div>
        {/* quiz soru */}
        <Question/>
        {/* Şıklar */}
        <Option/>
      </div>
      <div className='hidden lg:block relative h-[75vh] w-[8vh] mt-6'>
        <Image
          className='h-full w-full'
          src="/images/sag.png"
          alt="images"
          fill
        />
      </div> 
    </div>
    </div>
  )
}

export default QuizPage

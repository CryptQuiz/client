import HomeLogo from '@/components/HomeLogo/HomeLogo'
import React from 'react'
import Quizs from '@/components/Quizs/Quizs'

const Home = () => {
  return (
    <div className='flex flex-col justify-start lg:justify-between items-center lg:flex-row w-[80vw] h-[90vh] lg:h-[80vh] space-x-0 lg:space-x-8 space-y-8 lg:space-y-0'>
      {/* Logo - Stats */}
      <HomeLogo/>
      <Quizs/>
    </div>
  )
}

export default Home


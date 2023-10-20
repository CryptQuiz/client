import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className='w-[80vw] h-[80vh] flex flex-col space-y-8'>
      <div className='flex flex-row h-[40vh] space-x-8'>
        
        <div className='w-[25vw] h-[40vh] bg-neu-white flex flex-col justify-around space-y-8 rounded-50 border border-black border-r-8 border-b-8'>
        <div className="h-64 w-64 relative mx-auto overflow-hidden">
          <Image
            src="/images/icardi.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className="rounded-full border border-black border-r-8 border-b-8 h-full w-full" // just an example
          />
        </div>
        <div>
            <h2 className='text-32 font-bold text-center'>Mauro Emanuel Icardi</h2>
        </div>
    </div>
        
        <div className='w-[65vw] h-[40vh] bg-neu-white rounded-50 border border-black border-r-8 border-b-8 px-10 py-6'>
          <h1 className='text-32 font-bold font-archivo'>Recent Quizes</h1>
          <div className='h-[30vh]'>
            <div>
              <div className='flex flex-row justify-between text-xl font-bold font-public'>
              <div>Truefeedback Blockchain Quiz</div>
              <div>5/15</div>
              </div>
              <div className='bg-white '></div>
            </div>  
            <div>
              <div className='flex flex-row justify-between text-xl font-bold font-public'>
              <div>Truefeedback Blockchain Quiz</div>
              <div>5/15</div>
              </div>
              <div className='bg-white '></div>
            </div>
            <div>
              <div className='flex flex-row justify-between text-xl font-bold font-public'>
              <div>Truefeedback Blockchain Quiz</div>
              <div>5/15</div>
              </div>
              <div className='bg-white '></div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[40vh] bg-neu-white rounded-50 border border-black border-r-8 border-b-8 px-10 py-6'>
        <div className='text-32 font-bold font-archivo'>Stats</div>
      </div>
    </div>
  )
}

export default Profile

import React from 'react'
import ProfileImage from './components/profileImage'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className='w-[80vw] h-[80vh] flex flex-col space-y-8'>
      <div className='flex flex-row h-[40vh] space-x-8'>
        
        <div className='w-[25vw] h-[40vh] bg-neu-white flex flex-col justify-around space-y-8 rounded-20 border border-black border-r-8 border-b-8'>
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
        
        <div className='w-[65vw] h-[40vh] bg-neu-white rounded-20 border border-black border-r-8 border-b-8'>
        Recent Quizes
        </div>
      </div>
      <div className='h-[40vh]'>stast</div>
    </div>
  )
}

export default Profile

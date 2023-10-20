import React from 'react'
import Image from 'next/image'


const ProfileImage = () => {
  return (
    <div className='bg-white flex flex-col'>
      <div>
        <Image
            className='w-44 h-44 object-cover rounded-full border-8 border-neu-brown mx-auto'
            src = '/images/icardi.jpg'
            alt = 'icardi'
            width = {210}
            height = {210}
            />
        </div>
        <div>
            <h2>Mauro Emanuel Icardi</h2>
        </div>
    </div>
  )
}

export default ProfileImage

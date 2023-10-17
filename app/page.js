import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-neu-yellow h-screen'>
      <div className='flex justify-between bg-no-repeat'>
        <button className='bg-neu-pink text-5xl py-4 px-6 rounded-xl justify-center items-center mt-8 ml-48'>Q</button>
        <button className='bg-neu-purple w-64 h-14 text-xl rounded-lg justify-center items-center mt-10 mr-48'>Connect Wallet</button>
      </div>
      <div>
        <div className='flex justify-around mt-20'>
         <div className='mt-20 relative h-[14vh] w-[8vw] '>
         <Image
        src="/images/uc.png"
        alt='Image'
        fill
        />
         </div>
          <div className='  relative h-[48vh] w-[48vw]'>
          <Image
        src="/images/home.png"
        alt='Image'
        fill
        />
          </div>
          <div className='mt-40  relative h-[14vh] w-[8vw]'>
          <Image
        src="/images/d-pink.png"
        alt='Image'
       fill
        />
          </div>
        </div>
        <div className='flex justify-between mt-10'>
         <div className='ml-80 relative h-[18vh] w-[10vw]'>
         <Image
        src="/images/d-white.png"
        alt='Image'
        fill
        />
         </div>
          <div className='mt-8 mr-64 relative h-[14vh] w-[8vw]'>
          <Image
        src="/images/dik.png"
        alt='Image'
       fill
        />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

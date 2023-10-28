import React, { useEffect } from 'react'
import Image from 'next/image';
import { useSelector } from 'react-redux'
import { popUpOn,popUpOff } from '../../app/redux/popUp/popUpSlice'
import { useDispatch } from 'react-redux'
const PopUp = () => {
  const drawer = useSelector((state) => state.popUp.popUp)
  const dispatch = useDispatch()

   
  return (
   
  <div className={`absolute w-full h-full flex justify-center items-center ${drawer? "flex":"hidden"}`}>
    <div onClick={()=> dispatch(popUpOff())} className="absolute w-full h-full bg-black z-10 opacity-75 ">
   

    </div>
    <button onClick={()=> dispatch(popUpOff())} href='/dashboard' className='absolute   left-[21vw] top-[11vh] z-30'>
      <Image
       src="/images/quitimage.png"
       alt="profile"
       width={48}
       height={48}
      />
      </button>
      <div className=" absolute w-[55vw] h-[70vh] bg-white z-20 rounded-20 border border-black border-r-8 border-b-8">

      
   
      </div>
      </div>

  )
}

export default PopUp
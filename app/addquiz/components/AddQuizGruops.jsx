import React from 'react'
import AddQuestion from './AddQuestion'
import Questions from './Questions'
const AddQuizGruops = ({items}) => {
  return (
    <div className='flex flex-col space-y-3'>
    <div className="flex flex-col w-auto overflow-hidden p-3 space-y-1 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
      <span className="font-bold text-[20px] marker:">Quiz Adı</span>
      <input className='border-[2px] border-black p-2 rounded-10'
      placeholder='Quiz Adını Giriniz...'
      ></input>
    </div>
    <div className='flex flex-row w-full space-x-8'>
    <div className="flex flex-col w-full overflow-hidden p-3 space-y-1 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
      <span className="font-bold text-[20px] marker:">Quiz Günü</span>
      <input className='border-[2px] border-black p-2 rounded-10'
      placeholder='Quiz Günü Giriniz...'
      ></input>
    </div>
    <div className="flex flex-col w-full overflow-hidden p-3 space-y-1 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
      <span className="font-bold text-[20px] marker:">Quiz Saati</span>
      <input className='border-[2px] border-black p-2 rounded-10'
      placeholder='Quiz Saati Giriniz...' 
      ></input>
    </div>
    </div>
    <AddQuestion/>
<Questions/>
    </div>
  )
}

export default AddQuizGruops
import React from 'react'

const AddQuestion = () => {
  return (
    <div className="flex flex-col w-auto overflow-hidden p-2 space-y-2 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
      <span className="font-bold text-14">Soru Ekle</span>
      <div className='flex flex-row space-x-2'>
      <input className=' w-full border-[2px] border-black p-1 rounded-10'
      placeholder='Soruyu Giriniz...'
      ></input>
      <button className=' px-20 py-2 text-14 font-bold bg-[#BAFDA2] rounded-10 border border-black border-r-4 border-b-4'>Ekle</button>
      </div>
      <div className='flex flex-col space-y-2'>
      <div className='flex flex-row space-x-2 '>
      <input className='w-full border-[2px] border-black p-2 rounded-10' placeholder='A seçeneğini giriniz..'></input>
      <input className='w-full border-[2px] border-black p-2 rounded-10'placeholder='B seçeneğini giriniz..'></input>
      </div>
      <div className='flex flex-row space-x-2 '>
      <input className='w-full border-[2px] border-black p-2 rounded-10' placeholder='C seçeneğini giriniz..'></input>
      <input className='w-full border-[2px] border-black p-2 rounded-10' placeholder='D seçeneğini giriniz..'></input>
      </div>
      </div>
    </div>
  )
}

export default AddQuestion
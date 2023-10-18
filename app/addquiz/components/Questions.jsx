import React from 'react'

const Questions = () => {
  return (
   <div className="flex flex-col w-auto overflow-hidden p-3 space-y-2 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
    <div className='flex flex-row justify-between'>
    <span className="font-bold text-14">Soru Ekle</span>
    <div className='flex flex-row'>
    <span className='font-medium'> Toplam soru sayısı:</span> <span className='font-bold'>12</span>
    </div>
    </div>
  </div>
  )
}

export default Questions
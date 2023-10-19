import React from 'react'

const SponsorEntry = () => {
  return (
    <div className="flex flex-col w-auto overflow-hidden p-2 space-y-2 bg-[#D2D2D2] text-black rounded-20 border border-black border-r-4 border-b-4">
    <span className="font-bold text-14">Soru Ekle</span>
    <div className='flex flex-row space-x-2'>
    <input className=' w-full border-[2px] border-black p-1 rounded-10'
    placeholder='Sponsorluk Adını...'
    ></input>
    <button className=' px-20 py-2 text-14 font-bold bg-[#BAFDA2] rounded-10 border border-black border-r-4 border-b-4'>Ekle</button>
    </div>
    
    <div className='flex flex-row space-x-2'>
        <textarea style={{borderRadius:"10px", resize: "none",padding:"4px"}} className=' border-black border ' placeholder='Sponsorluk bedeli giriniz...' name="" id="" cols="50" rows="6"></textarea>
    <button className=' px-20 py-2 text-14 font-bold bg-[#C5A1FF] rounded-10 border border-black border-r-4 border-b-4'>Logo</button>

    </div>
  </div>
  )
}

export default SponsorEntry
import React from 'react'

const QueOption = () => {
  return (
    <div className='space-y-10 font-bold'>
      <div className="w-full text-black flex flex-row justify-between space-x-4">
              <div className="flex-row w-full">
                <div className="flex w-88 bg-neu-red3 items-center rounded-20 border border-black border-r-4 border-b-4 space-x-2">
                  <div className="text-40 pl-4">A</div>
                  <div>Merkezi bir otorite tarafından kontrol edilir.</div>
            </div>  
                </div>
              <div className="flex-row w-full">
                <div className="flex w-88 bg-neu-pink3 items-center rounded-20 border border-black border-r-4 border-b-4 space-x-2">
                  <div className="text-40 pl-4">B</div>
                  <div>Tüm veriler açıkça görülebilir ve değiştirilebilir.</div>
            </div>  
                </div>
                
              </div>
      <div className="w-full text-black flex flex-row justify-between space-x-4">
              <div className="flex-row w-full">
                <div className="flex w-88 bg-neu-purple3 items-center rounded-20 border border-black border-r-4 border-b-4 space-x-2">
                  <div className="text-40 pl-4">C</div>
                  <div>İşlemlerin hızını arttırır.</div>
            </div>  
                </div>
              <div className="flex-row w-full">
                <div className="flex w-88 bg-neu-blue3 items-center rounded-20 border border-black border-r-4 border-b-4 space-x-2">
                  <div className="text-40 pl-4">D</div>
                  <div>İşlemlerin gizliliğini korur ve değişmez bir kayıt tutar.</div>
            </div>  
                </div>
                
              </div>
              </div>

  )
}

export default QueOption
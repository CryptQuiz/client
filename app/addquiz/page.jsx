
import React from 'react'
import AddQuizGruops from './components/AddQuizGruops'
const page = () => {
  return (
    <div className="flex flex-row mdh:p-14 p-8 h-full space-x-8 w-full">
    <div className=" h-full w-[48vw] overflow-hidden flex flex-col space-y-3 bg-red-500">
<AddQuizGruops/>
</div>
    <div className="flex flex-col h-full w-[52vw] bg-blue-500">
        {/* sağ blok kodları */}
    </div>
  </div>
  )
}

export default page

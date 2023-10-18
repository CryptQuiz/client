import React from 'react'
import Stats from './components/Stats'
import Join from './components/Join'
import JoinSponsor from './components/JoinSponsor'


const Description = () => {
  return (
    <div className='flex space-y-8 py-12 flex-col h-[80vh] w-[100vw] px-20'>
          {/* sponsor adı ve zaman */}
          
        
        {/* alt container */}
        <div className='container flex flex-row h-[78vh]   justify-between  '>
            {/* ilk üç */}
            <div className='w-[16vw]   '>
            <Stats/>
            </div>
            <div className='flex flex-col space-y-8 '> 
                {/* katıl */}
                <Join/>
                {/* sponsorlar */}
                <JoinSponsor/>
            </div>
        </div>
        </div>
  
      

  )
}

export default Description

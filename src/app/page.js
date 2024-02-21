 import Icon1 from '@/b1'
import Icon2 from '@/b2'
import Icon3 from '@/b3'
import React from 'react'

function page() {
  return (
    <div className=' relative bg-black  w-screen h-screen flex flex-col'>
     <div id='b1' className='  absolute flex '>
      <Icon1/>
      <div id='b3' className='absolute'>

      <Icon3/>
      </div>
     </div>
     <div  id = 'b2' className='s'>
      <Icon2/>
     </div>
    </div>
  )
}

export default page

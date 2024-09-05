import React from 'react'

import LogoLog from "../assets/logoLight.svg"

function Logo({width = '100px'}) {
  return (
    <div className='flex items-center text-center'>
      <img src={LogoLog} className='h-20 md:h-28  '/>
    
    </div>
  )
}

export default Logo
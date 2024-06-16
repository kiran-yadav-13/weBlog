import React from 'react'
import LogoweBlog from "../assets/weBlogLogol.png"
import LogoLog from "../assets/LogoR.png"
import LogoLO from "../assets/weBlogLogo.png"
function Logo({width = '100px'}) {
  return (
    <div className='flex items-center text-center'>
      <img src={LogoLog} className='h-12 md:h-20  '/>
    
    </div>
  )
}

export default Logo
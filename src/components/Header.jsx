import React from 'react'

function Header() {
  return (
    <div className='flex justify-around bg-dark text-white'>
      <div className='m-2 flex flex-0.4 font-medium'>T3</div>
      <div className=' flex flex-0.6 justify-around'>
        <div className='m-2'>Fix a Bug</div>
        <div  className='m-2'>Community</div>
        <div  className='m-2'>About</div>
        <div  className='m-2'><button>Download</button></div>
      </div>
    </div>
  )
}

export default Header
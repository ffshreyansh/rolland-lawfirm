import React from 'react'

const Nav = () => {
  return (
    <nav className='flex items-center font-inter justify-between'>
        <div className='font-bold cursor-pointer'>ROLLAND</div>
        <div className='cursor-pointer'>
        <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6"/>
        </div>
        <div>
            <button className='border-black border-2 px-3 cursor-pointer py-1 rounded-full text-sm hover:bg-black hover:text-white'>CONTACT US</button>
        </div>
    </nav>
  )
}

export default Nav
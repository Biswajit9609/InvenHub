import React from 'react'

function Navbar() {
  return (
    <>
        <nav className='navbar w-[90%] bg-[#f8f9fa] flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-0 gap-5 py-10 lg:py-4 lg:px-10 lg:mt-7 rounded-2xl'>
            <div className="logo-container logo font">
                <h1>Inven<span className='text-[var(--logo-Red)]'>Hub</span></h1>
            </div>
            <div className="nav-list-container flex gap-12 items-center flex-col text-lg lg:flex-row">
                <a href="" className='nav-link'>Features</a>
                <a href="" className='nav-link'>Pricing</a>
                <a href="" className='nav-link'>Login</a>
                <a href="" className='get-started-btn'>Get Started</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar
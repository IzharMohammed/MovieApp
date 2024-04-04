import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar-wrapper'>
    <div className='navbar-heading'>Movix</div>
    <input className='navbar-input' type="text" placeholder='search here ...' />
    <img className='theme-icon' src="https://cdn.hugeicons.com/icons/moon-02-stroke-rounded.svg" alt="moon-02" width="24" height="24" />
    </div>
  )
}

export default Navbar
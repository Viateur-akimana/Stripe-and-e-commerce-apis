import React from 'react'
import navbar_logo from  "../../Assets/nav-logo.svg"
import nav_profile from "../../Assets/nav-profile.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navbar_logo} className='nav_logo' alt="" />
        <img src={nav_profile} className='nav_profile' alt="" />
    </div>
  )
}

export default Navbar
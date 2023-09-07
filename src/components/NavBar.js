import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
        <div className='navbar__items'>
            <div className='navbar__item'>
                <div>
                    <img 
                        className='navbar__logo' 
                        src={require("../images/logo.png")} 
                        alt='logo'
                    />
                </div>
                <div className='navbar__options'>
                    <span className='navbar__option'>Home</span>
                    <span className='navbar__option'>Gift</span>
                    <span className='navbar__option'>Order</span>
                    <span className='navbar__option'>Pay</span>
                    <span className='navbar__option'>Store</span>
                </div>
            </div>
            <div></div>
        </div>
    </>
  )
}

export default NavBar

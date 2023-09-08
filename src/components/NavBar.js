// import React from 'react'
import './NavBar.css'

// const NavBar = () => {
//   return (
//     <>
//         <div className='navbar__items'>
//             <div className='navbar__item'>
//                 <div>
//                     <img 
//                         className='navbar__logo pl-20 pr-20 mt-5' 
//                         src={require("../images/logo.png")} 
//                         alt='logo'
                        
//                     />
//                 </div>
//                 <div className='navbar__options'>
//                     <span className='navbar__option__green'>Home</span>
//                     <span className='navbar__option'>Gift</span>
//                     <span className='navbar__option'>Order</span>
//                     <span className='navbar__option'>Pay</span>
//                     <span className='navbar__option'>Store</span>
//                 </div>
//             </div>
//             <div></div>
//         </div>
//     </>
//   )
// }

// export default NavBar

import React from 'react'

const NavBar = () => {
  return (
    <>
        <div className='pl-20 pr-20 mt-5'>
            <div className='navbar__item flex item center'>
                <div>
                    <img 
                        src={require("../images/logo.png")} 
                        alt='logo'
                        width={40}     
                        height={40}
                        className='cursor-pointer'
                    />
                </div>
                <div>
                    <span className=''>Home</span>
                    <span className=''>Gift</span>
                    <span className=''>Order</span>
                    <span className=''>Pay</span>
                    <span className=''>Store</span>
                </div>
            </div>
            <div></div>
        </div>
    </>
  )
}

export default NavBar


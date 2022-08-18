import React from 'react'
import icon from '../images/Icon.svg'
import phn from '../images/Fill 1.svg'

const Header = () => {
let bool=false;
  function vanish(){
    bool=!bool
    console.log(bool)
    const side=document.querySelector('.side')
    bool?side.style.display='flex':side.style.display='none'
   
  }
  return (
  <nav className='navbar'>

    <div ><img className='icon' src={icon}/><br/><span className='logo'>ELECTRUM</span></div>
    <ul className='nav'>
        <li><button className='btn'>Get Started</button></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Installers</a></li>
        <li><a href='#'>Sign In</a></li>
        <li><img src={phn}/></li><li className='phn'>888-454-9979</li>
       </ul>
       <div className='hamburger' onClick={vanish}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>

        </div>
    
  </nav>
  )
}

export default Header
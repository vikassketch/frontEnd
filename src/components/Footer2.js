import React from 'react'
import icon from '../images/Icon.svg'

const Footer2 = () => {
  return (
    <div className='footer2'>
        <div className='top'>
<div className='inner'>
<p className='menu'>Main Menu</p>
<ul className='list'>
    <li><a href='#'>Our Mission</a></li>
    <li><a href='#'>Installer Network</a></li>
    <li><a href='#'>Utility Partners</a></li>
    <li><a href='#'>Sign In</a></li>
</ul>
</div>
<div className='inner'>
<p className='menu'>Resources</p>
<ul className='list'>
    <li><a href='#'>Explore Home Electrification</a></li>
    <li><a href='#'>Dive into Customer Stories</a></li>
    <li><a href='#'>Visit the Solar Learning</a></li>
    <li><a href='#'>Join the Electrum Team</a></li>
</ul>
</div>
<div className='inner'>
<p className='menu'>Others</p>
<ul className='list'>
    <li><a href='#'>Triguard Guarantee</a></li>
    <li><a href='#'>FAQs</a></li>
    <li><a href='#'>Support</a></li>
    <li><a href='#'>Contact Us</a></li>
</ul>
</div>
<div className='inner'>
    
<img className='menu icon2' src={icon}/>

<ul className='list'>
    <li className='footerLogo'>ELECTRUM</li>
    <li>888-515-0326</li>
    <li>hello@electrum.co</li>
    <button className='btn1'>Get Started</button>
</ul>
</div>
        </div>
    </div>
  )
}

export default Footer2
import React from 'react'
import Logo from '../images/Logo.png'
import './PageOne.css'

function PageOne() {
  return (
    <div className='ContainerOne'>
        <img className='Logo' src={Logo} alt='WordGenie' height={100}></img>
        <div className='OneLeft'>
            Random Textline
        </div>
        <div className='OneRight'>
            Image Placeholder
        </div>
    </div>
  )
}

export default PageOne
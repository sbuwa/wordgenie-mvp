import React from 'react'
import './Homepage.css'
import Logo from '../images/Logo.svg'
import PageOne from './PageOne'

function Homepage() {
  return (
    <div className='container'>
        <section className='child one'>
            <PageOne />
        </section>
        <section className='child two'>
            <h1>Second Page</h1>
        </section>
        <section className='child three'>
            <h1>Third Page</h1>
        </section>
        <section className='child four'>
            <h1>Fourth Page</h1>
        </section>
    </div>
  )
}

export default Homepage
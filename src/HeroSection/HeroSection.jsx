import React from 'react'
import './HeroSection.css'
import logo from '../assets/Images/NSCC_Logo.svg'

export default function HeroSection() {
  return (
    <>
        <section className="hero-section">
            <img src={logo} alt="" />
            <p className='overlay' >NSCC BITW is an outcome-oriented coding community that aims to upskill all its members and ultimately make them have successful careers.</p>
        </section>
    </>
  )
}

import React from 'react'
import { useState, useEffect } from 'react'
import './Navbar.css'
import home from '../assets/Icons/home.svg'
import aboutUs from '../assets/Icons/about.svg'
import team from '../assets/Icons/teams.svg'
import events from '../assets/Icons/events.svg'
import conatctUs from '../assets/Icons/contact.svg'



export default function Navbar() {

  return (
    <>

      <div className="navbar-container ">
        <div className="nav-items glass">
          <span id='home' className='  overlay ' onClick={(e)=>{ window.scrollTo(0, 0) }} > <img src={home} alt="Nice" /> <span> Home </span> </span>
          <span id='aboutUs' className='  overlay' onClick={(e)=>{ window.scrollTo(0,window.innerHeight) }} > <img src={aboutUs} alt="" /> <span> About Us </span> </span>
          <span id='team' className='  overlay'  onClick={(e)=>{ window.scrollTo(0,window.innerHeight*2) }} > <img src={team} alt="" /> <span> The Team </span> </span>
          <span id='events' className='  overlay'  onClick={(e)=>{ window.scrollTo(0,window.innerHeight*3) }} > <img src={events} alt="" /> <span> Events </span> </span>
          <span id='contactUs' className='  overlay'  onClick={(e)=>{ window.scrollTo(0,window.innerHeight*4) }} > <img src={conatctUs} alt="" /> <span> Conatct Us </span> </span>
        </div>

      </div>

    </>
  )
}

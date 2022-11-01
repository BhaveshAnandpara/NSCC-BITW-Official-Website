import React from 'react'
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
          <span className='overlay '> <img src={home} alt="Nice" /> <span> Home </span> </span>
          <span className='overlay' > <img src={aboutUs} alt="" /> <span> About Us </span> </span>
          <span className='overlay' > <img src={team} alt="" /> <span> The Team </span> </span>
          <span className='overlay' > <img src={events} alt="" /> <span> Events </span> </span>
          <span className='overlay' > <img src={conatctUs} alt="" /> <span> Conatct Us </span> </span>
        </div>

      </div>

    </>
  )
}

import React from 'react'
import './Team.css'
import hands from '../assets/Icons/hands.svg'

export default function Team() {
  return (
    <>
    <section className="team-container">

      <h1 className="titles" >
        <center>
          Meet The TEAM
          <img className="m-4" src={hands} alt="" />
        </center>
      </h1>

      <div className="team-content overlay  ">
      We have an amazing team filled with creative and hard working minds
      </div>

      <button className='btn glass' > <span className='overlay'> The Team </span></button>

    </section>
    </>

  )
}
 
import React from 'react'
import eyes from '../assets/Icons/Eyes.svg'
import goal from '../assets/Icons/target.svg'
import './AboutUs.css'

export default function AboutUs() {
    return (
        <>
            <section className='aboutUs-container'>

                <div className="about-cards glass">
                    <h1 className="titles" >
                        <center>
                            The VISON
                            <img className="m-4 icons"  src={eyes} alt="" />
                        </center>
                    </h1>

                    <p className="about-content  overlay">
                    The Vision is to build a student community to provide opportunity to learn and grow together.
                    </p>

                </div>

                <div className="about-cards glass">
                    <h1 className="titles" >
                        <center>
                            The GOAL
                            <img className="m-4 icons"  src={goal} alt="" />
                        </center>
                    </h1>

                    <p className="about-content  overlay">
                    To upskill its members and help flourish the coding culture in campus
                    </p>

                </div>

            </section>
        </>
    )
}

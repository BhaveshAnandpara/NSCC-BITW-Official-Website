import React from 'react'
import bubble from '../assets/Icons/bubble.svg'

import { Container } from 'react-bootstrap'
import './Social.css'
// import { TbMessageCircle } from "react-icons/tb";
import { FaDiscord, FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
// import { hover } from '@testing-library/user-event/dist/hover';


export default function Social() {
    return (
        <section className='social-section'>

            <h1 className="titles" >
                <center>
                    Contact Us
                    <img className="m-4" src={bubble} alt="" />
                </center>
            </h1>

            <div className=' social-media-icons-white '>
                <a className="Insta" href="https://tr.ee/h43jHUKXcV" >
                    <FaInstagram className="test" size="1.5em" />
                </a>
                <a className="linkdin" href="https://tr.ee/GDZG-pG-B3">

                    <FaLinkedin className='test' size="1.5em" />
                </a>
                <a className="twitter" href="https://tr.ee/UH1W1l8yq_">

                    <FaTwitter className='test' size="1.5em" />
                </a>
                <a href="#" className="discord">

                    <FaDiscord className='test' size="1.5em" />
                </a>
                <a href="#" className="github">

                    <FaGithub className='test' size="1.5em" />
                </a>
            </div>
        </section>
    )
}

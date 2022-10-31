import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import {Container} from 'react-bootstrap'
import './Social.css'
import { TbMessageCircle } from "react-icons/tb";
import { FaDiscord,FaInstagram,FaGithub,FaTwitter,FaLinkedin } from "react-icons/fa";
import { hover } from '@testing-library/user-event/dist/hover';


export default function Social(){
    return <Container>
        <h1 className="text-center ">CONTACT US
        
        <TbMessageCircle  size="1.1em" style={{marginLeft:"18px" }} />
        
        </h1>
       
        <div className='singleCol social-media-icons-white d-flex justify-content-evenly'>
            <a  className="Insta"href="https://tr.ee/h43jHUKXcV">
        
                <FaInstagram className = "test" size="2em"/>
            </a>
            <a className="linkdin" href="https://tr.ee/GDZG-pG-B3">
                
                <FaLinkedin className='test' size="2em"/>
            </a>
            <a className="twitter" href="https://tr.ee/UH1W1l8yq_">
                
                <FaTwitter className='test' size="2em"/>
            </a>
            <a href="#" className="discord">
                
                <FaDiscord className='test'  size="2em"/>
            </a>
            <a href="#" className="github">
            
                <FaGithub className='test' size="2em"/>
            </a>
        </div>
    </Container>
}

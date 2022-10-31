import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Team.css'

import {Container} from 'react-bootstrap'
//import './Social.css'
import { TbMessageCircle } from "react-icons/tb";
import { FaDiscord,FaInstagram,FaGithub,FaTwitter,FaLinkedin } from "react-icons/fa";
import { hover } from '@testing-library/user-event/dist/hover';

import bhavesh from './images/bhavesh.jpeg'
export default function Team(){
    return (
        
     

      <>
      <h2 style={{marginTop:"10%"}}>MEET THE TEAM</h2>
      <div className='container-fluid mt-5'>
        <div className='row text-center'>
          <div className='col-10 col-md-4 mt-5'>
            <div className='card p-2'>
              <div className='d-flex align-items-center'>
                <div className='image'>
                  <img src={bhavesh} className='rounded' width="150"/>
                </div>
                <div className='ml-3 w-100'>
                  <h4 className='mb-0 mt-0 textleft' style={{color:"#ffffff"}}>Bhavesh Anandpara</h4><span className='textLeft' style={{color:"#81a6b1"}}>President</span>
                  <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                    <div className=' d-flex flex-column'><span className='articles'>
                       <a href='#'>
             <FaInstagram className="icons "size="4em" style={{color:"#7fa9af"}}/>
             </a></span></div>
                    <div className=' d-flex flex-column'><span className='followers'> </span><a href='#'>
             <FaLinkedin className = "icons" size="2.3em"  style={{color:"#7fa9af"}}/>
             </a></div>
                    <div className=' d-flex flex-column'><span className='rating'></span><a href="#">
             <FaGithub className = "icons" size="2.2em "  style={{color:"#7fa9af"}} /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-10 col-md-4 mt-5'>
            <div className='card p-2'>
              <div className='d-flex align-items-center'>
                <div className='image'>
                  <img src={bhavesh} className='rounded' width="150"/>
                </div>
                <div className='ml-3 w-100'>
                  <h4 className='mb-0 mt-0 textleft' style={{color:"#ffffff"}}>Bhavesh Anandpara</h4><span className='textLeft' style={{color:"#81a6b1"}}>President</span>
                  <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                    <div className=' d-flex flex-column'><span className='articles'>
                       <a href='#'>
             <FaInstagram className="icons "size="4em" style={{color:"#7fa9af"}}/>
             </a></span></div>
                    <div className=' d-flex flex-column'><span className='followers'> </span><a href='#'>
             <FaLinkedin className = "icons" size="2.3em"  style={{color:"#7fa9af"}}/>
             </a></div>
                    <div className=' d-flex flex-column'><span className='rating'></span><a href="#">
             <FaGithub className = "icons" size="2.2em "  style={{color:"#7fa9af"}} /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-10 col-md-4 mt-5'>
            <div className='card p-2'>
              <div className='d-flex align-items-center'>
                <div className='image'>
                  <img src={bhavesh} className='rounded' width="150"/>
                </div>
                <div className='ml-3 w-100'>
                  <h4 className='mb-0 mt-0 textleft' style={{color:"#ffffff"}}>Bhavesh Anandpara</h4><span className='textLeft' style={{color:"#81a6b1"}}>President</span>
                  <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                    <div className=' d-flex flex-column'><span className='articles'>
                       <a href='#'>
             <FaInstagram className="icons "size="4em" style={{color:"#7fa9af"}}/>
             </a></span></div>
                    <div className=' d-flex flex-column'><span className='followers'> </span><a href='#'>
             <FaLinkedin className = "icons" size="2.3em"  style={{color:"#7fa9af"}}/>
             </a></div>
                    <div className=' d-flex flex-column'><span className='rating'></span><a href="#">
             <FaGithub className = "icons" size="2.2em "  style={{color:"#7fa9af"}} /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-10 col-md-4 mt-5'>
            <div className='card p-2'>
              <div className='d-flex align-items-center'>
                <div className='image'>
                  <img src={bhavesh} className='rounded' width="150"/>
                </div>
                <div className='ml-3 w-100'>
                  <h4 className='mb-0 mt-0 textleft' style={{color:"#ffffff"}}>Bhavesh Anandpara</h4><span className='textLeft' style={{color:"#81a6b1"}}>President</span>
                  <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                    <div className=' d-flex flex-column'><span className='articles'>
                       <a href='#'>
             <FaInstagram className="icons "size="4em" style={{color:"#7fa9af"}}/>
             </a></span></div>
                    <div className=' d-flex flex-column'><span className='followers'> </span><a href='#'>
             <FaLinkedin className = "icons" size="2.3em"  style={{color:"#7fa9af"}}/>
             </a></div>
                    <div className=' d-flex flex-column'><span className='rating'></span><a href="#">
             <FaGithub className = "icons" size="2.2em "  style={{color:"#7fa9af"}} /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-10 col-md-4 mt-5'>
            <div className='card p-2'>
              <div className='d-flex align-items-center'>
                <div className='image'>
                  <img src={bhavesh} className='rounded' width="150"/>
                </div>
                <div className='ml-3 w-100'>
                  <h4 className='mb-0 mt-0 textleft' style={{color:"#ffffff"}}>Bhavesh Anandpara</h4><span className='textLeft' style={{color:"#81a6b1"}}>President</span>
                  <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                    <div className=' d-flex flex-column'><span className='articles'>
                       <a href='#'>
             <FaInstagram className="icons "size="4em" style={{color:"#7fa9af"}}/>
             </a></span></div>
                    <div className=' d-flex flex-column'><span className='followers'> </span><a href='#'>
             <FaLinkedin className = "icons" size="2.3em"  style={{color:"#7fa9af"}}/>
             </a></div>
                    <div className=' d-flex flex-column'><span className='rating'></span><a href="#">
             <FaGithub className = "icons" size="2.2em "  style={{color:"#7fa9af"}} /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          

         


          

          
        </div>
      </div>
      </>


    );
    
}
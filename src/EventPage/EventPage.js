import React, { useState } from "react";
import axios from 'axios';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CampaignIcon from "@mui/icons-material/Campaign";

import "./EventPage.css";
import data from "./Data";
function EventPage() {
  const [noOfEvent, setNoOfEvent] = useState(3);
  const slice = data.eventData.slice(0, noOfEvent);

//   const [data, setData] = useState([]);
//   axios
//   .get(
//         "api"
//   )
//   .then((resp) => {
//     setData(resp.data.event);
//   }).catch((err)=>console.log(err));

  const loadMore = () =>
  {
    setNoOfEvent(noOfEvent + noOfEvent);
  }
  return (
    <>
      <div className="container overflow-hidden">
        <h1>
          <center>
            Our Recent Events
            <CampaignIcon sx={{ color: "#d966ff", fontSize: "45px" }} />
          </center>
        </h1>

        <div className="row  justify-content-center">
          {slice.map((e, i) => {
            return (
              <div className="col-md-3 m-2 box1" key={i}>
                <div className=" p-3 ">
                  <h2>{e.title}</h2>
                  <h3>{e.point}</h3>
                  <hr />
                  <p>
                    Date :{e.date} <br />
                    Mode :{e.mode} <br />
                    <br />
                    {e.desp}
                  </p>
                  <a href={e.moreurl}>View More...</a>
                </div>
              </div>
            );
          })}

          <div className="col-md-3 box1">
            <div className="p-3">
                <button box1 onClick={() => loadMore()}>
                More Event 
              <ArrowForwardIcon />
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="container px-4">
    //   <h1>
    //     <center>
    //       Our Events <CampaignIcon sx={{ color: "red", fontSize: "30px" }} />
    //     </center>
    //   </h1>
    //   <div className="row gx-5">
    //     <div className="col-md-5 box1">
    //       <div className="p-3">
    //         <h2>Session on Open Source and GSoC</h2>
    //         <h3>Speaker : Rose Kamal Love</h3>
    //         <hr />
    //         <p>
    //           Date :22nd Oct 2022 <br />
    //           Mode :Online <br />
    //           <br />
    //           <span><strong>In this session you will learn about</strong> </span>
    //           </p>
    //           <ul>
    //             <li>What is open Source</li>
    //             <li>Introduction to GSoC</li>
    //           </ul>
    //           And many more... <br />

    //         <a href="">View More...</a>
    //       </div>
    //     </div>

    //     <div className="col-md-4 box1">
    //       <div className=" p-3">
    //         <h2>GAME ON!</h2>
    //         <h3>Games : BGMI, Valorant, Mini Militia</h3>
    //         <hr />
    //         <p>
    //           Date : 5th-9th Sep 2022 <br />
    //           Mode : Online <br />
    //           <br />
    //           Bajaj institute of Technology, <br />
    //           Wardha's first ever ESports EventPage <br />
    //           was conducted by NSCC BITW.
    //         </p>
    //         <a href="">View More...</a>
    //       </div>
    //     </div>

    //   </div>
    // </div>
  );
}

export default EventPage;

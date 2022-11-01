import React, { useState } from "react";
// import axios from 'axios';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CampaignIcon from "@mui/icons-material/Campaign";

import speaker from '../assets/Icons/speaker.svg'

import "./EventPage.css";
import data from "./Data";


function EventPage() {

  const [noOfEvent, setNoOfEvent] = useState(3);
  const slice = data.eventData.slice(0, noOfEvent);

  function eventDetails(data) {

    let result = []
    let count = 0
    for (const key in data) {
      result.push(<p className="eventDetails" > {key} : {data[key]} </p>)
      if (count === 0) {
        result.push(<hr></hr>)
        count++
      }
    }

    return result

  }

  //   const [data, setData] = useState([]);


  return (
    <>
      <section className=" container  overflow-hidden">

        <h1 className="titles" >
          <center>
            Our Recent EVENTS 
            <img className="m-4" src={speaker} alt="" />
          </center>
        </h1>

        <div className="row eventCard-container  justify-content-center align-items-center">
          {slice.map((data, i) => {

            return (

              <div className=" glass col-md-3  box1" key={i}>
                  <p className=" overlay event-card-title">{data.name}</p>
                  <p>{eventDetails(data.eventDetails)}</p>
                  <p className="multiline summary" >
                    {data.summary}
                  </p>
                  <a className="overlay" >View More...</a>
              </div>
            );
          })}

          <div className="col-md-2  box1 glass">
            <div className="p-3 text-align-center">

              <button box1 className="box1">
                More Event
                <ArrowForwardIcon />
              </button>

            </div>
          </div>

        </div>

      </section>
    </>
  );
}

export default EventPage;

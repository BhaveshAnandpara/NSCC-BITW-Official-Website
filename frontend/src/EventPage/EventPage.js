import React, { useState, useEffect } from "react";
// import axios from 'axios';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CampaignIcon from "@mui/icons-material/Campaign";
import * as ReactDOM from 'react-dom/client';


import speaker from '../assets/Icons/speaker.svg'
import axios from 'axios'

import "./EventPage.css";
import data from "./Data";


function EventPage() {

  const [noOfEvent, setNoOfEvent] = useState(3);
  const [events, setEvents] = useState()
  const slice = data.eventData.slice(0, noOfEvent);

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'http://localhost:5050/getEvents',
    };

    axios(config)
      .then(function (response) {

        let arr = []

        if (response.data['upcomingEvents'].length < 2) {

          arr.concat(response.data['upcomingEvents'])

          console.log(arr);
          arr.concat((response.data['recentEvents'])[1 - response.data['upcomingEvents'].length])
          setEvents(arr)

        }
        else {

          arr = arr.concat((response.data['upcomingEvents'])[0], (response.data['upcomingEvents'])[1])
          console.log(arr);

          setEvents(arr)
        }

        // setEvents(response.data)

      })
      .catch(function (error) {
        console.log(error);
      });


  }, [])


  useEffect(() => {

    const root = ReactDOM.createRoot(document.getElementById('eventCardContainer'))

    const eventCards = Cards(events)

    root.render(<>
      {eventCards}

      <div className=" box1 glass">


        <button box1 className="box1">
          More Event
          <ArrowForwardIcon />
        </button>

      </div>


    </>)
  }, [events])


  function Cards(events) {

    const eventCards = []

    console.log(events);

    try {

      events.forEach(data => {

        eventCards.push(

          <div className=" glass  box1">
            <p className=" overlay event-card-title">{data.name}</p>
            <p>{eventDetails(data.eventDetails)}</p>
            <p className="multiline summary" >
              {data.summary}
            </p>
            <a className="overlay" >View More...</a>
          </div>
        );

      })

    } catch (e) { }

    return eventCards

  }

  //   const [data, setData] = useState([]);
  function eventDetails(data) {

    let result = []
    let count = 0
    for (const key in data) {

      if (key !== 'date' && key !== 'mode') {
        result.unshift(<><p className="eventDetails" > {key} : {data[key]} </p><hr></hr></>)
      }
      else{
        result.push(<p className="eventDetails" > {key} : {data[key]} </p>)
      }


    }

    return result

  }



  return (
    <>
      <section className=" container ">

        <h1 className="titles" >
          <center>
            Our Recent EVENTS
            <img className="m-4" src={speaker} alt="" />
          </center>
        </h1>

        <div className="eventCard-container" id="eventCardContainer" >



        </div>

      </section>
    </>
  );
}


export default EventPage;

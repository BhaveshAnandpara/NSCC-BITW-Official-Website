import React, { useState } from "react";
// import axios from 'axios';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CampaignIcon from "@mui/icons-material/Campaign";

import speaker from '../../assets/Icons/speaker.svg'

import "../EventPage.css";
import "./DetailedEventPage.css";
import data from ".././Data";


function DetailedEventPage() {

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
            <section className=" container border">

                <h1 className="titles" >
                    <center>
                        Our Recent EVENTS
                        <img className="m-4" src={speaker} alt="" />
                    </center>
                </h1>

                <div className="eventCardContainer ">
                    {slice.map((data, i) => {

                        return (

                            <div className=" glass  box1 eventBox" key={i}>
                                <p className=" overlay event-card-title">{data.name}</p>
                                <p>{eventDetails(data.eventDetails)}</p>
                                <p className="multiline summary" >
                                    {data.summary}
                                </p>
                                <a className="overlay" >View More...</a>
                            </div>
                        );
                    })}

                </div>

            </section>
        </>
    );
}

export default DetailedEventPage;

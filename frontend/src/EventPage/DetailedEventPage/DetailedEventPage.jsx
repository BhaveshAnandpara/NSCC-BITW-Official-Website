import React, { useState, useEffect } from "react";
// import axios from 'axios';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CampaignIcon from "@mui/icons-material/Campaign";
import * as ReactDOM from 'react-dom/client';


import speaker from '../../assets/Icons/speaker.svg'
import axios from 'axios'

import ".././EventPage.css";
import './DetailedEventPage.css'

import data from ".././Data";


function EventPage() {

    const [upcomingEvents, setUpcomingEvents] = useState()
    const [recentEvents, setRecentEvents] = useState()


    useEffect(() => {

        var config = {
            method: 'get',
            url: 'http://localhost:5050/getEvents',
        };

        axios(config)
            .then(function (response) {

                setUpcomingEvents(response.data['upcomingEvents'])
                setRecentEvents(response.data['recentEvents'])

            })
            .catch(function (error) {
                console.log(error);
            });


    }, [])


    useEffect(() => {

        const upcomingRoot = ReactDOM.createRoot(document.getElementById('upcomingEventCardContainer'))
        const recentRoot = ReactDOM.createRoot(document.getElementById('recentEventCardContainer'))


        try {

            const upcomingEventsCards = Cards(upcomingEvents)
            const recentEventsCards = Cards(recentEvents)

            upcomingRoot.render(<>
                {upcomingEventsCards}
            </>)

            recentRoot.render(<>
                {recentEventsCards}
            </>)

        } catch (e) {
            console.log(e);
        }

    }, [upcomingEvents, recentEvents])


    function Cards(events) {

        const eventCards = []

        try {

            events.forEach(data => {

                eventCards.push(

                    <div className=" glass box card ">
                        <p className=" overlay event-card-title">{data.name}</p>
                        <p>{eventDetails(data.eventDetails)}</p>
                        <p className="multiline summary" >
                            {data.desc}
                        </p>
                        <a className="overlay viewMore" onClick={() => { window.location.href = `/event?${data.name}` }} >View More...</a>
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
            else {
                result.push(<p className="eventDetails" > {key} : {data[key]} </p>)
            }


        }

        return result

    }



    return (
        <>
            <section className=" container eventContainer">

                <h1 className="titles" >
                    <center>
                        Our Upcoming EVENTS
                        <img className="m-4" src={speaker} alt="" />
                    </center>
                </h1>

                <div className="eventCard-container rootContainer " id="upcomingEventCardContainer" >
                </div>

                <h1 className="titles" id="recentEventTitles" >
                    <center>
                        Our Recent EVENTS
                        <img className="m-4" src={speaker} alt="" />
                    </center>
                </h1>

                <div className="eventCard-container rootContainer" id="recentEventCardContainer" >
                </div>

            </section>
        </>
    );
}


export default EventPage;

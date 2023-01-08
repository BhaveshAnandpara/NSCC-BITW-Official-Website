import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import data from '../EventPage/Data';
import './Events.css'
import { createRoot } from 'react-dom/client';
import HorizontalScroll from 'react-horizontal-scrolling'

export default function Events() {

    const [event, setEvent] = useState()

    useEffect(() => {

        let name = (window.location.href).split('?')[1]
        name = decodeURIComponent(name)

        var config = {
            method: 'get',
            url: 'https://nscc-bitw-website-backend.vercel.app/home/getEvents',
        };

        axios(config)
            .then(function (response) {

                const events = response.data["EventInfo"]

                events.forEach(element => {
                    if (element.name === name) {
                        setEvent(element)
                    }
                });


            })
            .catch(function (error) {
                console.log(error);
            });


    }, [])

    useEffect(() => {

        const pageComp = page(event)

        const root = createRoot(document.getElementById('eventContainer'))
        root.render(
            <>{pageComp}</>
        )

    }, [event])


    const imageContainer = (images)=>{

        let imageArr = []

        images.forEach((image)=>{
            imageArr.push( <div className="imageItem"><img src={ "\\Media\\" + `${getPath(image)}`}  alt="" /></div> )

        })
            
            return (
                <>
                    {imageArr}
                </>
            )

    }


    const getPath = (path)=>{
            return path.split('Media\\')[1]
    }
    

    // HTML Code for Page

    const page = (data) => {

        try {

            return (
                <>
                    <div className="eventHeader">
                        <p className='overlay eventTitle' >{data.name}</p>
                        {data.eventDetails['speaker'] ? <p  > Speaker : {data.eventDetails['speaker']} </p> : <p > Games : {data.eventDetails['game']} </p>}
                    </div>
                    <div className="info">
                        <div className="poster"><img src={ "\\Media\\" + `${getPath(data.poster)}`}  alt="" /></div>
                        <div className='' >
                            <p>Date : {data.eventDetails['date']}</p>
                            <p>Mode : {data.eventDetails['mode']}</p>
                            <h2 className='overlay' >Brief Description</h2>
                            <p className='eventDesc' >{data.desc}</p>
                        </div>
                    </div>
                    <p className="eventSummary ">
                        {JSON.parse(data.summary)}
                    </p>
                    <div className="eventMedias " id='eventMedia'>

                        <p className='overlay titles' >Checkout the Glipmses of Event</p>

                        <HorizontalScroll className='eventImagesContainer' >
                            {(data.images).map((pic, idx) => (
                                <embed className='eventImg' loading='lazy' type="image/jpg" src={`/Media/${getPath(pic)}`} key={idx}></embed>
                                        ))}
                        </HorizontalScroll>

                        <HorizontalScroll className='eventVideosContainer' >
                            {(data.videos).map((vid, idx) => (
                                <video controls muted autoPlay='false' className='eventImg' loading='lazy'  type="video/webm"  src={`/Media/${getPath(vid)}`} key={idx}  ></video>
                                        ))}
                        </HorizontalScroll>
                    </div>
                    
                </>
            )
        } catch (e) {
            
        }



    }

    return (<>
        <section className=' container' id='eventContainer' >

        </section>
    </>)
}

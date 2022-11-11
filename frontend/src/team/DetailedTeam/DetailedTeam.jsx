import React from 'react'
import './DetailedTeam.css'
import hands from '../../assets/Icons/hands.svg'
import axios from 'axios'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom/client';


import github from '../../assets/Icons/github-white.svg'
import instagram from '../../assets/Icons/insta-white.svg'
import Linkedin from '../../assets/Icons/linkedin-white.svg'

const card = (data) => {
    // console.log((data.image).split('\\')[5]);
    return (
        <>
            <div className="team-card-container ">
                <div className="profileImg overlay">
                    <img src={`/Media/${(data.image).split('\\')[5]}`} alt="profile" />
                </div>
                <div className="member-info ">
                    <div className="name-desg ">
                        <span className='member-name' >{data.name}</span>
                        <span className='member-desgn overlay' >{data.designation}</span>
                    </div>
                    <div className="member-links">
                        <img className='icon overlay' src={github} alt="" />
                        <img className='icon overlay' src={instagram} alt="" />
                        <img className='icon overlay' src={Linkedin} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

function renderCards(data) {
    const arr = []
    let coreTeam = []
    let TechnicalTeam = []
    let ManagmentTeam = []
    let SocialMediaTeam = []
    let ContentAndPRTeam = []

    console.log(data);

    for (const key in data) {
        if (key == "coreTeam") {

            data[key].forEach(element => {
                coreTeam.push(
                    card(element)
                )
            });

        }

        if (key == "TechnicalTeam") {

            data[key].forEach(element => {
                TechnicalTeam.push(
                    card(element)
                )
            });

        }

        if (key == "ManagmentTeam") {

            data[key].forEach(element => {
                ManagmentTeam.push(
                    card(element)
                )
            });

        }

        if (key == "SocialMediaTeam") {

            data[key].forEach(element => {
                SocialMediaTeam.push(
                    card(element)
                )
            });

        }

        if (key == "ContentAndPRTeam") {

            data[key].forEach(element => {
                ContentAndPRTeam.push(
                    card(element)
                )
            });

        }

    }
    return (
        <>
            <h2>Core Team</h2>
            <div className="cards-container">
                {coreTeam}
            </div>
            <h2>Technical Team</h2>
            <div className="cards-container">
                {TechnicalTeam}
            </div>
            <h2>Managment Team</h2>
            <div className="cards-container">
                {ManagmentTeam}
            </div>
            <h2>Social Media and Marketing Team</h2>
            <div className="cards-container">
                {SocialMediaTeam}
            </div>
            <h2>PR and Content Team</h2>
            <div className="cards-container">
                {ContentAndPRTeam}
            </div>
        </>
    )
}

export default function DetailedTeam() {

    const [data, setData] = useState()

    useEffect(() => {

        var config = {
            method: 'get',
            url: 'http://localhost:5050/teams',
        };

        axios(config)
            .then(function (response) {

                // console.log(JSON.stringify(response.data));
                setData(response.data)

                const cards = renderCards(response.data)
                console.log(cards);

                // const root = React.ReactDOM.createRoot(document.getElementById('card-container'))
                const root = ReactDOM.createRoot(document.getElementById('card-container'))
                root.render(cards)

            })
            .catch(function (error) {
                console.log(error);
            });


    }, [])

    return (
        <>
            <section className='detailedTeam-section'>

                <h1 className="titles" >
                    <center>
                        Meet The TEAM
                        <img className="m-4" src={hands} alt="" />
                    </center>
                </h1>

                <div className="card-container " id='card-container'>

                </div>

            </section>
        </>
    )
}

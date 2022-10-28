// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// import { Router } from "express";

// const {express} = Router




// const firebaseConfig = {
//     apiKey: "AIzaSyCfzG7Hl5YeCYkH45M6bLYaFcpjwPh-vuk",
//     authDomain: "nscc-bitw.firebaseapp.com",
//     projectId: "nscc-bitw",
//     storageBucket: "nscc-bitw.appspot.com",
//     messagingSenderId: "357924802216",
//     appId: "1:357924802216:web:a6ab5f26a7727a968d7c9d",
//     measurementId: "G-K6089VEEY0"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// server.listen(5000, () =>
// {

// router.post('/Teams', async (req, res) => {
//         const data = req.body.data
//         // Data -> "Name" : "{ Name , Team , Image , { links : Linkedin , Instagram , Github } }"

//         try {
//             const docRef = addDoc(collection(db, "teams"), data);
//             res.json("Data Added")
//         } catch (e) {
//             console.error("Error adding document: ", e);
//         }

//     })

//     //To read Data

// router.get('/Teams', async (req, res) => {

//         const querySnapshot = await getDocs(collection(db, "teams"));
//         querySnapshot.forEach((doc) => {
//           console.log(`${doc.id} => ${doc.data()}`);
//         });

//     })

// }
// )


var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, getDocs } = require("firebase/firestore");



const firebaseConfig = {
    apiKey: "AIzaSyCfzG7Hl5YeCYkH45M6bLYaFcpjwPh-vuk",
    authDomain: "nscc-bitw.firebaseapp.com",
    projectId: "nscc-bitw",
    storageBucket: "nscc-bitw.appspot.com",
    messagingSenderId: "357924802216",
    appId: "1:357924802216:web:a6ab5f26a7727a968d7c9d",
    measurementId: "G-K6089VEEY0"
};

const server = initializeApp(firebaseConfig);
const db = getFirestore(server);

const PORT = 5050

app.post('/teams', async (req, res) => {

    const data = req.body.data
    // Data -> "Name" : "{ Name , Team , Image , { links : Linkedin , Instagram , Github } }"


    try {

        data.forEach(member => {

            const docRef = addDoc(collection(db, `teams/`), member);

        });

        res.status(200).json("Data Added")

    } catch (e) {

        console.error("Error adding document: ", e);

    }

})


app.get('/teams', async (req, res) => {

    let memberInfo = []

    try {

        const querySnapshot = await getDocs(collection(db, "teams/"));
        querySnapshot.forEach((doc) => {
            memberInfo.push(doc.data())
        }
        );
        res.json(memberInfo)


    } catch (e) {
        res.json(e)

    }

})

app.post('/setEvents', async (req, res) => {

    const data = req.body.data
    // { data : { name  , date  ,eventDetails{  date , mode , games , speaker , etc} , desc , summary , thumbnail , images[] , videos[] } }

    try {

        data.forEach(event => {

            const docRef = addDoc(collection(db, `events/`), event);

        });

        res.status(200).json("Event Added")

    } catch (e) {

        console.error("Error adding document: ", e);

    }

})

app.get('/getEvents', async (req, res) => {

    let EventInfo = []
    let upcomingEvents = []
    let recentEvents = []

    let today = new Date()

    try {
        const querySnapshot = await getDocs(collection(db, "events/"));
        querySnapshot.forEach((doc) => {
            EventInfo.push(doc.data())

            const eventDate = doc.data().date

            today = today.getDate() + "-" +  (today.getMonth() + 1) + "-" + today.getFullYear()

            today > eventDate ? recentEvents.push(doc.data()) : upcomingEvents.push(doc.data())

        }
        );
        res.json({"EventInfo" : EventInfo , "upcomingEvents" : upcomingEvents , "recentEvents" : recentEvents })


    } catch (e) {
        res.json(e)

    }

})



app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`);
});
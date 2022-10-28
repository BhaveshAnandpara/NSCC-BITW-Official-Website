
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/assets/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

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

app.post('/teams', upload.single('image'),  async (req, res) => {

    let data = req.body.data
    const ImageInformatiom = req.file

    data = JSON.parse(data)
    // Data -> "Name"   : "{ Name , Team , Image , { links : Linkedin , Instagram , Github } }"


    try {

        data.forEach(member => {
            member.image = ImageInformatiom.path
            const docRef = addDoc(collection(db, `teams/`), {member});
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

app.post('/setEvents', upload.array('images' , 10),  async (req, res) => {

    var data = req.body.data
    data = JSON.parse(data)
    const files = req.files
    var paths = []


    files.forEach((ele)=>{
        paths.push(ele.path)
    })
    // { data : { name  , date  ,eventDetails{  date , mode , games , speaker , etc} , desc , summary , thumbnail , images[] , videos[] } }

    try {

        data.forEach(event => {
            event.iamges = paths
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

    const today = new Date()

    try {
        const querySnapshot = await getDocs(collection(db, "events/"));
        querySnapshot.forEach((doc) => {

            EventInfo.push(doc.data())

            const eventDate = doc.data().date

            let date = today.getDate() + "-" +  (today.getMonth() + 1) + "-" + today.getFullYear()

            date > eventDate ? recentEvents.push(doc.data()) : upcomingEvents.push(doc.data())

        }
        );
        res.json({"EventInfo" : EventInfo , "upcomingEvents" : upcomingEvents , "recentEvents" : recentEvents })


    } catch (e) {
        console.log(e)
        res.json(e)

    }

})

app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`);
});
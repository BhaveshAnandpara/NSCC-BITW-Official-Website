
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const multer = require('multer')

const storage = multer.diskStorage({ // notice you are calling the multer.diskStorage() method here, not multer()
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/Media/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage })

app.use(bodyParser.json());

const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, getDocs } = require("firebase/firestore");


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

app.post('/teams', upload.array('images'), async (req, res) => {
    try {

        var data = req.body.data
        data = JSON.parse(data)
        const ImageInformatiom = req.files

        console.log(ImageInformatiom);
        // console.log(ImageInformatiom.path);
        // Data -> "Name"   : "{ Name , Team , Image , { links : Linkedin , Instagram , Github } }"


        data.forEach(member => {
            ImageInformatiom.forEach((img) => {
                const profile = ((img.originalname).split('.')[0]).replaceAll("_", " ")

                if (member.name === profile) {
                    console.log("Nice");
                    member.image = img.path
                }
            })
            const docRef = addDoc(collection(db, `teams/`), { member });
        });

        res.status(200).json("Data Added")

    } catch (e) {
        console.error("Error adding document: ", e);
    }

})



app.get('/teams', async (req, res) => {

    let coreTeam = []
    let coreArr = []
    let TechnicalTeam = []
    let ManagementTeam = []
    let SocialMediaTeam = []
    let ContentAndPRTeam = []


    try {

        const querySnapshot = await getDocs(collection(db, "teams/"));

        querySnapshot.forEach((doc) => {

            if (doc.data()['member'].designation === "President") {
                coreArr[0] = doc.data()['member']
            }
            else if (doc.data()['member'].designation === "Vice-President") {
                coreArr[1] = doc.data()['member']
            }
            else if (doc.data()['member'].designation == "Technical-Lead" || doc.data()['member'].designation == "Social-Media-and-Marketing-Lead" || doc.data()['member'].designation == "Content-and-PR-Head") {
                coreTeam.push(doc.data()['member'])
            }
            else if (doc.data()['member'].designation == "Technical-Member") {
                TechnicalTeam.push(doc.data()['member'])
            }
            else if (doc.data()['member'].designation == "Management-Member") {
                ManagementTeam.push(doc.data()['member'])
            }
            else if (doc.data()['member'].designation == "SocialMedia-Member") {
                SocialMediaTeam.push(doc.data()['member'])
            }
            else if (doc.data()['member'].designation == "ContentAndPR-Member") {
                ContentAndPRTeam.push(doc.data()['member'])
            }
        }
        );


        // console.log([...coreArr, ...coreTeam]);

        res.json({ coreTeam: [...coreArr, ...coreTeam], TechnicalTeam, ManagementTeam, SocialMediaTeam, ContentAndPRTeam })

    } catch (e) {
        console.log(e);
        res.json(e)

    }

})

app.post('/setEvents', upload.array('images', 10), async (req, res) => {

    var data = req.body.data
    data = JSON.parse(data)

    const files = req.files
    var paths = []
    let poster = ''
    let videos = []

    files.forEach((ele) => {
        if ((ele.path).includes('poster')) {
            poster = ele.path
        }
        else if ((ele.path).includes('video')) {
            videos.push(ele.path)
        }
        else {
            paths.push(ele.path)
        }
    })
    // { data : { name  , date  ,eventDetails{  date , mode , games , speaker , etc} , desc , summary , thumbnail , images[] , videos[] } }

    try {

        data.forEach(event => {
            event.images = paths
            event.poster = poster
            event.videos = videos
            event.summary = JSON.stringify(event.summary)
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

            let eventDate = doc.data().date

            let date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
            date = date.replaceAll('-' , '');
            eventDate = eventDate.replaceAll('-' , '');

            date > eventDate ? recentEvents.push(doc.data()) : upcomingEvents.push(doc.data())

        }
        );
        res.json({ "EventInfo": EventInfo, "upcomingEvents": upcomingEvents, "recentEvents": recentEvents })


    } catch (e) {
        console.log(e)
        res.json(e)

    }

})

app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`);
});
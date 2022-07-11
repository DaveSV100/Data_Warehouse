const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

require("dotenv").config({ path: "../.env" })
const SERVER_PORT = process.env.SERVER_PORT;
const jwtKey = process.env.JWTKEY;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(helmet());
// app.use(expressJwt({ secret: jwtKey, algorithms: ["HS256"] }).unless({ path: [ "/login" ] }));
// app.use(function (err, req, res, next) {
//     if (err.name === "UnauthorizedError") {
//         res.status(401).send("You need to sign in or sign up");
//     } else {
//         next(err);
//     }
// })
//Kinda a database
const user = {
    name: "myname",
    password: "mypassword"
}
const news = [
    {
        id: 1,
        titulo: "noticia 111111"
    },
    {
        id: 2,
        titulo: "noticia 2"
    }
];

//Middleware to verify JWT TOKEN
const jwtVerification = async(req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    try {
        
        const verification = jwt.verify(token, jwtKey);
        // console.log(verification.payload.admin)
        req.data = verification;
        next()
    } catch(error) {
        console.error(error)
    }
}
app.get("/home", jwtVerification, (req, res) => {
    res.send(news);
});
// app.get("/news", autehticateToken, (req, res) => {
//     res.send(news);
// });

app.post("/login", (req, res) => {
    if(req.body.name == user.name || req.body.password == user.password) {
        const token = jwt.sign({
            login: "user"
        }, jwtKey);
        res.send(token);
        console.log("You're welcome");
    } else {
        res.status(401).end("incorrect user");
    }
});

app.listen(SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER_PORT}`);
})
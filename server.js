const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const { expressjwt: expressJwt } = require('express-jwt');
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./.env" })
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const jwtKey = process.env.JWTKEY;

const users = require("./controllers/users");

app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(expressJwt({ secret: jwtKey, algorithms: ["HS256"] }).unless({ path: [ "/", "/login", "/home", "/home/users" ] }));
app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).send("You need to sign in or sign up");
    } else {
        next(err);
    }
})

app.use(express.static("public"));
//EJS
app.set("view engine", "ejs");
app.set("views", "./views")


//ROUTES
app.use("/", users);


//Kinda a database
const user = {
    email: "a",
    password: "a"
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
app.get("/", (req, res) => {
    res.render("hello");
})
app.get("/home", (req, res) => {
    res.render("home")
    // res.send("hello world")
    console.log("Welcome to Data Warehouse :D");
});
// app.get("/news", autehticateToken, (req, res) => {
//     res.send(news);
// });

app.get("/login", (req, res) => {
    res.render("login")
    // res.send("hello world")
});
app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log({
        "email": email,
        "password": password
    });
    if(req.body.email === user.email && req.body.password === user.password) {
        // const token = jwt.sign({
        //     login: "user"
        // }, jwtKey);
        // res.send(token);
        console.log("You're welcome");
        res.redirect("/home");
    } else {
        res.status(401).send("incorrect user");
    }
    // if(req.body.name == user.name || req.body.password == user.password) {
    //     const token = jwt.sign({
    //         login: "user"
    //     }, jwtKey);
    //     res.send(token);
    //     console.log("You're welcome");
    // } else {
    //     res.status(401).end("incorrect user");
    // }
});

app.listen(SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER_PORT}`);
})
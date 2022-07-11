const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// const compression = require("compression");
// const helmet = require("helmet");
require("dotenv").config({ path: "../.env" })
const SERVER_PORT = process.env.SERVER_PORT;

// app.use(compression());
// app.use(helmet());
// app.use(bodyParser.json());
app.use(express.json());

//Kinda a database
const user = {
    name: "myname",
    password: "mypassword"
}

app.get("/home", (req, res) => {
    res.json("gooooood");
});
// app.get("/news", autehticateToken, (req, res) => {
//     res.send(news);
// });

app.post("/login", (req, res) => {
    if(req.body.name == user.name || req.body.password == user.password) {
        // const token = jwt.sign({
        //     login: "user"
        // }, jwtKey);
        // res.send(token);
        res.json("Correct user")
        console.log("You're welcome");
    } else {
        res.status(401).end("incorrect user")
    }
});

app.listen(SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER_PORT}`);
})
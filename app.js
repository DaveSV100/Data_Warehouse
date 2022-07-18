const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//Requiring routes
const login = require("./controllers/login.js");
const users = require("./controllers/users.js");
//Config
require("dotenv").config({ path: "./.env" });
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/", login);
app.use("/", users);

app.get("/", (req, res) => {
    res.render("index")
});
app.use((req, res, next) => {
    useResponse = {
        error: true,
        code: 404,
        message: "Page not found",
    };
    res.status(404).send(useResponse.message);
});


//Listening to port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
//HELMET
const cors = require("cors");
//Require middlewares
const {
  logErrors,
  errorHandler
} = require("./controllers/middlewares/utils.js");
//Requiring routes
const login = require("./controllers/login.js");
const users = require("./controllers/users.js");
const regions = require("./controllers/regions.js");
const countries = require("./controllers/countries.js");
const cities = require("./controllers/cities.js");
const companies = require("./controllers/companies.js")
const contacts = require("./controllers/contacts.js")
const { use } = require("passport");
const router = require("./controllers/login.js");
//Config
require("dotenv").config({ path: "./.env" });
const port = process.env.SERVER_PORT || 3001;




app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
// app.use(cookieParser());
app.use(cors())

//Routes
app.use("/", login);
app.use("/", users);
app.use("/", regions);
app.use("/", countries);
app.use("/", cities);
app.use("/", companies);
app.use("/", contacts);

app.get("/", (req, res) => {
    res.render("index")
});

// app.use(logErrors);
// app.use(errorHandler);



app.use((req, res, next) => {
    const useResponse = {
        error: true,
        code: 404,
        message: "Page not found",
    };
    // res.status(404).send(useResponse.message);
    res.render("err/404")
});


//Listening to port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
//   }
const express = require("express");
const router = express.Router();
const sequelize = require("../models/connection.js");

const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const LocalStrategy = require("passport-local")

const initializePassport = require("../config/passport-config.js");
initializePassport( 
    passport, 
    email => {

    },
    id => {
        
    }
);

require("dotenv").config({ path: "../.env" });
const jwtKey = "ccf8e092ea82347ff3103967c23b5c14bad323d3afa1106802d8ef5000cb744b39c74693d69c1dc69adc4d1a029523790a6e83a3d33cb412f055fa55a2bee879";
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const {
    verifyUser
} = require("./middlewares/utils.js")

router.get("/home", async(req, res) => {
    const name = req.body;
    console.log(name);
    res.status(200).json("Home page");
})
router.get("/login", (req, res) => {
    res.render("login");
})
router.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = await bcrypt.hash(req.body.password, 10);
        console.log({
            "email": email,
            "password": password
        })
        const data = await sequelize.query("SELECT * FROM users WHERE email = ?", {replacements: [email], type: sequelize.QueryTypes.SELECT,})
        console.log(data);
        const id = data[0].ID;
        const username = data[0].name;
        const payload = {
            id: id,
            user: username
        }
        //Into the payload will be inserted name of user, role (1 == admin, 0 == client), and ID
        console.log(payload)
        const token = jwt.sign({payload}, jwtKey, { expiresIn: "1h" });
        // res.status(200).json({Message: `You're welcome ${username}`, Token: token});
        res.send(token);
        // return res.redirect("/home");
    } catch (error) {
        res.status(400).json("Error message: " + error);
        console.error(error);
    }
});

module.exports = router;
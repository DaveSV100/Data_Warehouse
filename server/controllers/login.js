// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
//   }
const express = require("express");
const router = express.Router();
const sequelize = require("../models/connection.js");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const {
    verifyUser
} = require("./middlewares/utils.js");
require("dotenv").config({ path: "../.env" });
const { expressjwt: expressJwt } = require('express-jwt');
const jwtKey = "ccf8e092ea82347ff3103967c23b5c14bad323d3afa1106802d8ef5000cb744b39c74693d69c1dc69adc4d1a029523790a6e83a3d33cb412f055fa55a2bee879";
const jwt = require("jsonwebtoken");


// router.use(cookieParser());
// router.use(expressJwt({ secret: jwtKey, algorithms: ["HS256"] }).unless({ path: [ "/login" ] }));
// router.use(function (err, req, res, next) {
//     if (err.name === "UnauthorizedError") {
//         res.status(401).send("You need to sign in or sign up");
//     } else {
//         next(err);
//     }
// })



//Routes
router.get("/home", async (req, res) => {
    // let token = req.cookies.token;
    // let acces_token = token.replace(/["']/g, "");
    // console.log(acces_token);
    res.status(200).json("Home page");
    res.render("index.ejs")
})
router.get("/login", (req, res) => {
    res.render("login");
})

router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;
        const data = await sequelize.query("SELECT * FROM users WHERE email = ?", {replacements: [email], type: sequelize.QueryTypes.SELECT})
        const id = data[0].ID;
        const username = data[0].name;
        const payload = {
            id: id,
            user: username
        }
        if (id) {
            const token = jwt.sign({payload}, jwtKey, { expiresIn: "1h" });
            console.log(token);
            res.status(200).json(token);
            res.redirect("/home");
        }
    } catch (error) {
        console.error(error);
    }
})
// router.post("/login", async (req, res) => {
//     try {
//         const email = req.body.email;
//         const password = await bcrypt.hash(req.body.password, 10);
//         console.log({
//             "email": email,
//             "password": password
//         })
//         const data = await sequelize.query("SELECT * FROM users WHERE email = ?", {replacements: [email], type: sequelize.QueryTypes.SELECT,})
//         console.log(data);
//         const id = data[0].ID;
//         const username = data[0].name;
//         const payload = {
//             id: id,
//             user: username
//         }
//         //Into the payload will be inserted name of user, role (1 == admin, 0 == client), and ID
//         console.log(payload)
//         console.
//         const token = jwt.sign({payload}, jwtKey, { expiresIn: "1h" });
//         // res.status(200).json({Message: `You're welcome ${username}`, Token: token});
//         res.send(token);
//         // return res.redirect("/home");
//     } catch (error) {
//         res.status(400).json("Error message: " + error);
//         console.error(error);
//     }
// });


module.exports = router;

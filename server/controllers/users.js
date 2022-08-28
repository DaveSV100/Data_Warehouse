const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });
const sequelize = require("../models/connection.js");
const bcrypt = require("bcrypt");
const jwtKey = "ccf8e092ea82347ff3103967c23b5c14bad323d3afa1106802d8ef5000cb744b39c74693d69c1dc69adc4d1a029523790a6e83a3d33cb412f055fa55a2bee879";
const jwt = require("jsonwebtoken");
const { expressjwt: expressJwt } = require('express-jwt');
const { validateCookie } = require('./middlewares/utils.js')
const cookieParser = require("cookie-parser");



// router.use(expressJwt({ secret: jwtKey, algorithms: ["HS256"] }).unless({ path: [ "/login" ] }));
// router.use(function (err, req, res, next) {
//     if (err.name === "UnauthorizedError") {
//         res.status(401).send("You need to sign in or sign up");
//     } else {
//         next(err);
//     }
// })

//************************ PLATZI
// const UsersService = require("../services/users.service.js");
// const service = new UsersService();

// router.get("/users", async (req, res, next) => {
//   try{
//     const users = await service.find();
//     res.status(200).json(users)
//       // const records = await sequelize.query("SELECT * FROM users", { type: sequelize.QueryTypes.SELECT })
//       // res.status(200).json(records);
//       // console.log(records);
//   } catch(error){
//       // res.status(400).json(`Error message: ${error.message}`)
//       next(error);
//       // // next(error);
//   }
// });

// router.get("/users", (req, res) => {
//   const { size } = req.query;
//   const limit = size || 10;
//   for (let i = 0; i < limit; i++) {
//     //res.json("Show users")
//   }
// })
//************************ PLATZI


//Name, last name, email, profile, password

router.get("/users", async (req, res) => {
    try {
        console.log('Cookies: ', req.cookies)
        console.log('Signed Cookies: ', req.signedCookies)

        const records = await sequelize.query("SELECT * FROM users", { type: sequelize.QueryTypes.SELECT })
        res.status(200).json(records);
        // console.log(records);
    } catch(error) {
        res.status(400).json(`Error message: ${error}`)
        console.error(error);
        // next(error);
    }
});

//Name, last name, email, profile, password

router.post("/users", async (req, res) => {
    try {
        const { name, lastname, email, profile } = req.body;
        const password = await bcrypt.hash(req.body.password, 10);
        if (name && lastname && email && profile && password) {
            const add = await sequelize.query(
                "INSERT INTO users (name, lastname, email, profile, password) VALUES (:name, :lastname, :email, :profile, :password)",
                { replacements: { name, lastname, email, profile, password } }
            )
            res.status(200).json("User added");
        } else {
            res.status(400).json("Error message: You need to insert the data required" );
        }
    } catch (error) {
        res.status(400).json("Error message: " + error);
        console.error(error);
    }
})

router.put("/users", async (req, res) => {
    try {
        const { name, email } = req.body;
        const password = await bcrypt.hash(req.body.password, 10);
        if (name && email) {
            const add = await sequelize.query(
                "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)",
                { replacements: { name, email, password } }
            )
            res.status(200).json("User added");
        } else {
            res.status(400).json("Error message: You need to insert the data required" );
        }
    } catch (error) {
        res.status(400).json("Error message: " + error);
        console.error(error);
    }
})



router.delete("/users/:id", async(req, res) => {
    //Delete user by ID
    try {
        const user_id = req.params.id;
        const deleteUser = await sequelize.query(
            "DELETE FROM users WHERE id = :id",
            { replacements: {id: user_id} }
        )
        res.status(200).json("User removed");
    } catch (error) {
        console.error(error);
        res.status(400).json("Error: " + error);
    }
})

module.exports = router;

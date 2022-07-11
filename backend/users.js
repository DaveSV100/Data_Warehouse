const express = require("express");
const sequelize = require("../database/connection.js");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
require("dotenv").config({ path: "../.env" });
const jwtKey = process.env.JWTKEY;
const router = express.Router();

router.get("/home/users", async (req, res) => {
    try{
        const records = await sequelize.query("SELECT * FROM users", { type: sequelize.QueryTypes.SELECT })
        res.status(200).json(records);
        console.log(records);
    } catch(error){
        res.status(400).json(`Error message: ${error}`)
        console.error(error);
    }
});
router.post("/home/users", async (req, res) => {
    const { email, password } = req.body;
    try {
        if (email && password) {
            const add = await sequelize.query(
                "INSERT INTO users (email, password) VALUES (:email, :password)",
                { replacements: { email, password } }
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
module.exports = router;
const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });
const sequelize = require("../models/connection.js");
const bcrypt = require("bcrypt");
const jwtKey = "ccf8e092ea82347ff3103967c23b5c14bad323d3afa1106802d8ef5000cb744b39c74693d69c1dc69adc4d1a029523790a6e83a3d33cb412f055fa55a2bee879";
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

router.get("/users", async (req, res) => {
    try{
        const records = await sequelize.query("SELECT * FROM users", { type: sequelize.QueryTypes.SELECT })
        res.status(200).json(records);
        console.log(records);
    } catch(error){
        res.status(400).json(`Error message: ${error}`)
        console.error(error);
    }
});
router.post("/users", async (req, res) => {
    try {
        const { name, email } = req.body;
        const password = await bcrypt.hash(req.body.password, 10);
        if (name && email && password) {
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

module.exports = router;
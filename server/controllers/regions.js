const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });
const sequelize = require("../models/connection.js");

router.get("/regions", async (req, res) => {
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

router.post("/regions", async (req, res) => {
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

router.put("/regions", async (req, res) => {
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



router.delete("/regions/:id", async(req, res) => {
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
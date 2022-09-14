const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });
const sequelize = require("../models/connection.js");
const { getCityID } = require("./utils/index.js")

router.get("/companies", async (req, res) => {
    try {
        const records = await sequelize.query("SELECT * FROM Companies", { type: sequelize.QueryTypes.SELECT })
        res.status(200).json(records);
    } catch(error) {
        res.status(400).json(`Error message: ${error}`)
        console.error(error);
    }
});

router.post("/companies", async (req, res) => {
    try {
        const { name, city, direction, email, phone } = req.body;
        const city_id = await getCityID(city);
        console.log(city_id);
            res.status(200).json("Company added");

        // if (name, city_id, direction, email, phone) {ci
        //     const add = await sequelize.query(
        //         "INSERT INTO Companies (Name, City_id, Direction, Email, Phone) VALUES (:name, :city_id, :direction, :email, :phone)",
        //         { replacements: {name, city_id, direction, email, phone } }
        //     )
        //     res.status(200).json("Company added");
        // } else {
        //     res.status(400).json("Error message: You need to insert the data required" );
        // }
    } catch (error) {
        res.status(400).json("Error message: " + error);
        console.error(error);
    }
})

router.put("/companies", async (req, res) => {
    try {
        const { id, name } = req.body;
        if (id, name) {
            const add = await sequelize.query(
                "UPDATE Companies SET Name = :name WHERE ID = :id",
                { replacements: { name, id: id } }
            )
            res.status(200).json("Company updated");
        } else {
            res.status(400).json("Error message: You need to insert the data required" );
        }
    } catch (error) {
        res.status(400).json("Error message: " + error);
        console.error(error);
    }
})



router.delete("/companies/:id", async(req, res) => {
    //Delete user by ID
    try {
        const country_id = req.params.id;
        const deleteCountry = await sequelize.query(
            "DELETE FROM Companies WHERE id = :id",
            { replacements: {id: country_id} }
        )
        res.status(200).json("Company removed");
    } catch (error) {
        console.error(error);
        res.status(400).json("Error: " + error);
    }
})

module.exports = router;
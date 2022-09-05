const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });
const sequelize = require("../models/connection.js");

router.get("/cities", async (req, res) => {
    try {
        const records = await sequelize.query("SELECT * FROM cities", { type: sequelize.QueryTypes.SELECT })
        res.status(200).json(records);
    } catch(error) {
        res.status(400).json(`Error message: ${error}`)
        console.error(error);
    }
});

router.post("/cities", async (req, res) => {
    try {
        const { country_id, name } = req.body;
        if (country_id, name) {
            const add = await sequelize.query(
                "INSERT INTO cities (Country_id, Name) VALUES (:country_id, :name)",
                { replacements: { country_id, name } }
            )
            res.status(200).json("City added");
        } else {
            res.status(400).json("Error message: You need to insert the data required" );
        }
    } catch (error) {
        res.status(400).json("Error message: " + error);
        console.error(error);
    }
})

router.put("/cities", async (req, res) => {
    try {
        const { id, name } = req.body;
        if (id, name) {
            const add = await sequelize.query(
                "UPDATE cities SET Name = :name WHERE ID = :id",
                { replacements: { name, id: id } }
            )
            res.status(200).json("City updated");
        } else {
            res.status(400).json("Error message: You need to insert the data required" );
        }
    } catch (error) {
        res.status(400).json("Error message: " + error);
        console.error(error);
    }
})



router.delete("/cities/:id", async(req, res) => {
    //Delete user by ID
    try {
        const city_id = req.params.id;
        const deleteUser = await sequelize.query(
            "DELETE FROM cities WHERE id = :id",
            { replacements: {id: city_id} }
        )
        res.status(200).json("City removed");
    } catch (error) {
        console.error(error);
        res.status(400).json("Error: " + error);
    }
})

module.exports = router;
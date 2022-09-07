const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });
const sequelize = require("../models/connection.js");

router.get("/countries", async (req, res) => {
    try {
        const records = await sequelize.query("SELECT * FROM countries", { type: sequelize.QueryTypes.SELECT })
        res.status(200).json(records);
    } catch(error) {
        res.status(400).json(`Error message: ${error}`)
        console.error(error);
    }
});

router.post("/countries", async (req, res) => {
    try {
        const { region_id, name } = req.body;
        if (region_id, name) {
            const add = await sequelize.query(
                "INSERT INTO Countries (Region_id, Name) VALUES (:region_id, :name)",
                { replacements: { region_id, name } }
            )
            res.status(200).json("Country added");
        } else {
            res.status(400).json("Error message: You need to insert the data required" );
        }
    } catch (error) {
        res.status(400).json("Error message: " + error);
        console.error(error);
    }
})

router.put("/countries", async (req, res) => {
    try {
        const { id, name } = req.body;
        if (id, name) {
            const add = await sequelize.query(
                "UPDATE countries SET Name = :name WHERE ID = :id",
                { replacements: { name, id: id } }
            )
            res.status(200).json("Country updated");
        } else {
            res.status(400).json("Error message: You need to insert the data required" );
        }
    } catch (error) {
        res.status(400).json("Error message: " + error);
        console.error(error);
    }
})



router.delete("/countries/:id", async(req, res) => {
    //Delete user by ID
    try {
        const country_id = req.params.id;
        const deleteCountry = await sequelize.query(
            "DELETE FROM countries WHERE id = :id",
            { replacements: {id: country_id} }
        )
        res.status(200).json("Country removed");
    } catch (error) {
        console.error(error);
        res.status(400).json("Error: " + error);
    }
})

module.exports = router;
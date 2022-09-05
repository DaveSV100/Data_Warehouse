const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });
const sequelize = require("../models/connection.js");

router.get("/regions", async (req, res) => {
    try {
        const records = await sequelize.query("SELECT * FROM regions", { type: sequelize.QueryTypes.SELECT })
        res.status(200).json(records);
    } catch(error) {
        res.status(400).json(`Error message: ${error}`)
        console.error(error);
    }
});

router.post("/regions", async (req, res) => {
    try {
        const { name } = req.body;
        if (name) {
            const add = await sequelize.query(
                "INSERT INTO regions (name) VALUES (:name)",
                { replacements: { name } }
            )
            res.status(200).json("Region added");
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
        const { id, name } = req.body;
        if (id, name) {
            const add = await sequelize.query(
                "UPDATE regions SET Name = :name WHERE ID = :id",
                { replacements: { name, id: id } }
            )
            res.status(200).json("Region updated");
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
        const region_id = req.params.id;
        const deleteUser = await sequelize.query(
            "DELETE FROM regions WHERE id = :id",
            { replacements: {id: region_id} }
        )
        res.status(200).json("Region removed");
    } catch (error) {
        console.error(error);
        res.status(400).json("Error: " + error);
    }
})

module.exports = router;
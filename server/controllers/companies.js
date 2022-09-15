const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });
const sequelize = require("../models/connection.js");
const { getCityID } = require("./utils/index.js")

router.get("/companies", async (req, res) => {
    try {
        const records = await sequelize.query("SELECT Companies.ID, Companies.Name, Cities.Name as City, Companies.Direction, Companies.Email, Companies.Phone FROM Companies INNER JOIN Cities on Companies.City_id = Cities.ID ORDER BY Companies.ID ASC", { type: sequelize.QueryTypes.SELECT })
        console.log(records)
        res.status(200).json(records);
    } catch(error) {
        res.status(400).json(`Error message: ${error}`)
        console.error(error);
    }
});

router.get("/companies/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const records = await sequelize.query("SELECT Companies.ID, Companies.Name, Cities.Name as City, Companies.Direction, Companies.Email, Companies.Phone FROM Companies INNER JOIN Cities on Companies.City_id = Cities.ID WHERE Companies.ID = :id", 
        { replacements: {id}, type: sequelize.QueryTypes.SELECT })
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
        if (name, city_id, direction, email, phone) {
            const add = await sequelize.query(
                "INSERT INTO Companies (Name, City_id, Direction, Email, Phone) VALUES (:name, :city_id, :direction, :email, :phone)",
                { replacements: {name, city_id, direction, email, phone} }
            )
            res.status(200).json("Company added");
        } else {
            res.status(400).json("Error message: You need to insert the data required" );
        }
    } catch (error) {
        res.status(400).json("Error message: " + error);
        console.error(error);
    }
})

router.put("/companies", async (req, res) => {
    try {
        const { id, name, city, direction, email, phone } = req.body;
        const city_id = await getCityID(city);
        if (id, name, city_id, direction, email, phone) {
            const add = await sequelize.query(
                "UPDATE Companies SET Name = :name, City_id = :city_id, Direction = :direction, Email = :email, Phone = :phone WHERE ID = :id",
                { replacements: { name, city_id, direction, email, phone, id } }
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
        const id = req.params.id;
        const deleteCountry = await sequelize.query(
            "DELETE FROM Companies WHERE id = :id",
            { replacements: {id} }
        )
        res.status(200).json("Company removed");
    } catch (error) {
        console.error(error);
        res.status(400).json("Error: " + error);
    }
})

module.exports = router;
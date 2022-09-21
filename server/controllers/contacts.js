const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });
const sequelize = require("../models/connection.js");
const { getCityID } = require("./utils/index.js")

router.get("/contacts", async (req, res) => {
    try {
        const records = await sequelize.query("SELECT * FROM Contacts", { type: sequelize.QueryTypes.SELECT })
        res.status(200).json(records);
    } catch(error) {
        res.status(400).json(`Error message: ${error}`)
        console.error(error);
    }
});

router.get("/contacts/:id", async (req, res) => {
    const companyID = req.params.id;
    try {
        const records = await sequelize.query("SELECT Companies.ID, Companies.Name, Cities.Name as City, Companies.Direction, Companies.Email, Companies.Phone FROM Companies INNER JOIN Cities on Companies.City_id = Cities.ID WHERE Companies.ID = :id", 
        { replacements: {id: companyID}, type: sequelize.QueryTypes.SELECT })
        res.status(200).json(records);
    } catch(error) {
        res.status(400).json(`Error message: ${error}`)
        console.error(error);
    }
});

router.post("/contacts", async (req, res) => {
    try {
        const { contact, email, direction, city_id, country_id, region_id, company_id, job, channel, interest } = req.body;
        // const city_id = await getCityID(city);
        // const country_id = await getCountryID(country);
        // const region_id = await getRegionID(region);
        // const company_id = await getCompanyID(company);
        if (contact, email, direction, city_id, country_id, region_id, company_id, job, channel, interest) {
            const add = await sequelize.query(
                "INSERT INTO Contacts (Contact, Email, Direction, City_id, Country_id, Region_id, Company_id, Job, Channel, Interest) VALUES (:contact, :email, :direction, :city_id, :country_id, :region_id, :company_id, :job, :channel, :interest)",
                { replacements: {contact, email, direction, city_id, country_id, region_id, company_id, job, channel, interest} }
            )
            res.status(200).json("Contact added");
        } else {
            res.status(400).json("Error message: You need to insert the data required" );
        }
    } catch (error) {
        res.status(400).json("Error: " + error);
        console.error(error);
    }
})

router.put("/contacts", async (req, res) => {
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



router.delete("/contacts/:id", async(req, res) => {
    //Delete user by ID
    try {
        const id = req.params.id;
        const deleteCompany = await sequelize.query(
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
const express = require("express");
const router = express.Router();
require("dotenv").config({ path: "../.env" });
const sequelize = require("../models/connection.js");
const jwtKey = "ccf8e092ea82347ff3103967c23b5c14bad323d3afa1106802d8ef5000cb744b39c74693d69c1dc69adc4d1a029523790a6e83a3d33cb412f055fa55a2bee879";
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const {
    verifyUser
} = require("./middlewares/utils.js")
router.get("/login", (req, res) => {
    res.json("Bienvenido a Data Warehouse");
})

//Verify User middleware must be linked here

router.post("/login", verifyUser, async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        // res.json("You're welcome " + email)
        // console.log({
        //     "email": email,
        //     "password": password
        // });
        const data = await sequelize.query("SELECT * FROM users WHERE email = ?", {replacements: [req.body.email], type: sequelize.QueryTypes.SELECT,})
        const username = data[0].name;
        const id = data[0].ID;
        const payload = {
            user: username,
            id: id
        }
        //Into the payload will be inserted name of user, role (1 == admin, 0 == client), and ID
        console.log(payload)
        const token = jwt.sign({payload}, jwtKey, { expiresIn: "1h" });
        res.status(200).json({Message: `You're welcome ${username}`, Token: token});
        //Save token into local storage
        
        console.log(token);
    } catch (error) {
        res.status(400).json("Error message: " + error);
        console.error(error);
    }
});


module.exports = router;
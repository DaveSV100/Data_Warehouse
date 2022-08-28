const { Cookie } = require("express-session");
const sequelize = require("../../models/connection.js");

const verifyUser = async (req, res, next) => {
    if(req.body.email && req.body.password != "") {
        try {
            const records = await sequelize.query("SELECT * FROM users WHERE email = ? && password = ?", { replacements: [req.body.email, req.body.password], type: sequelize.QueryTypes.SELECT, })
            //This if statment verifies whether there's data or not
            if (records[0]) {
                next();
            } else if (records[0] == null) {
                res.status(404).json("User not found :V")
            }
        } catch (error) {
            res.status(400).json("Error message: " + error);
            console.error(error);
        }
    } else {
        res.status(400).json("You need to insert your email and password");
    }
}

const validateCookie = (req, res, next) => {
    const token = req.cookies.token
    console.log(token)
    next()
}

//Middlewares for errors
const logErrors = (err, req, res, next) => {
  console.log(err);
  next(err);
}
const errorHandler = (err, req, res, next) => {
  res.status(400).json({
    message: err.message,
    // stack: err.stack
  });
}

//Export
module.exports = {
    verifyUser,
    logErrors,
    errorHandler,
    validateCookie
}

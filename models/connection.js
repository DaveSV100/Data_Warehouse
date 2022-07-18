require("dotenv").config({ path: "../.env" });
const Sequelize = require("sequelize");
const DB_USER = "root";
const DB_PASSWORD = "database";
const DB_HOST = "127.0.0.1";
const DB_PORT = "3306";
const DB_NAME = "warehouse";

const path = `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const sequelize = new Sequelize(path, { operatorsAliases: false });
sequelize.authenticate().then(() => {
    console.log("Connected to Database");
}).catch(err => {
    console.error("Connection not stablished", err);
})

module.exports = sequelize;

// const Sequelize = require("sequelize");
// require("dotenv").config({ path:"../.env" });
// const DB_USER = process.env.DB_USER;
// const DB_PASSWORD = process.env.DB_PASSWORD;
// const DB_HOST = process.env.DB_HOST;
// const DB_PORT = process.env.DB_PORT;
// const DB_NAME = process.env.DB_NAME;
// const path = `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
// const sequelize = new Sequelize(path, { operatorsAliases: false });
// sequelize.authenticate().then(() => {
//     console.log("Connected to Database");
// }).catch(err => {
//     console.error("Connection not stablished", err);
// })

// module.exports = sequelize;
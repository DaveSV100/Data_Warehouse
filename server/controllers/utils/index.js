const sequelize = require("../../models/connection.js");

const getCityID = async(name) => {
    try {
        const records = await sequelize.query("SELECT ID FROM Cities WHERE name = ?", { replacements: [name] })
        const cityID = records[0].ID;
        console.log(cityID);
        return records;
    } catch(error) {
        console.log(error)
        // throw new Error(error);
    }
}

module.exports = {
    getCityID
}
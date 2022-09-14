const sequelize = require("../../models/connection.js");

const getCityID = async(name) => {
    try {
        const records = await sequelize.query("SELECT id FROM Cities WHERE name = ?", { replacements: [name], type: sequelize.QueryTypes.SELECT })
        const cityID = records[0].id;
        return cityID;
    } catch(error) {
        console.log(error)
        // throw new Error(error);
    }
}

module.exports = {
    getCityID
}
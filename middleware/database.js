const db = require("../models");

exports.connect = async() => {
    try {
        const connection = await db.sequelize.sync({ alter: true, force: false });
        if (connection) {
            console.log(":::::::: Database connected successfully :::::::::::");
        }
    } catch(err) {
        console.log(":::::: Error while connecting to database !! ::::::");
        console.log(err);
    }
}
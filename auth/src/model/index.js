// Dependencies
const Sequelize = require("sequelize");

// Db Connection
const database = "mqtt";
const username = "hachadmin";
const password = "hackadmin";
const host = "hackathon.cc2vb3ot4m30.us-east-1.rds.amazonaws.com";
const dialect = "postgresql";

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
    define: {
        underscored: true
    }
});

// Models
const models = {
    User: sequelize.import("./User")
};

models.sequelize = sequelize;

module.exports = models;

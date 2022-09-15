const Sequelize = require('sequelize');
const env = require("./database.json");

module.exports = new Sequelize(env.development);
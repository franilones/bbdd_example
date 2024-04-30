// const mysql = require('mysql2');
// const pool = mysql.createPool({
// host: '127.0.0.1',
// user: process.env.DB_USER,
// password: process.env.DB_PASS,
// database: process.env.DB_NAME,
// port: process.env.DB_PORT || 3306,
// });
// global.db = pool.promise();
//
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    "root",
    "BgTHh$32Ww",
    {host: "127.0.0.1", dialect: "mysql"});

module.exports = sequelize;
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
    process.env.DB_USER,
    process.env.DB_PASS,
    {host: process.env.DB_HOST, dialect: "mysql"});

module.exports = sequelize;
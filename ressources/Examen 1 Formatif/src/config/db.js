//Les modules
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

//La connexion vers la BD
const pool = mysql.createPool({
    connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

module.exports = pool;
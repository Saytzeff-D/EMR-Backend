const mysql = require('mysql')

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.user,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
})

module.exports = pool
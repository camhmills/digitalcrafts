require('dotenv').config()
const Pool = require("pg").Pool;

const envpassword = process.env.password

const creds = new Pool({
    host: "localhost",
    port: 5432,
    database: "fuber",
    user: "postgres",
    password: envpassword
})

module.exports = creds;
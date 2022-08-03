const mysql = require('mysql')

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

con.connect((err) => {
    if (err) {
        return console.log({ "Error in Database connection": err.sqlMessage })
    }

    console.log("Database connected succesfully")

})

module.exports = con;
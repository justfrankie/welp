const mysql = require('mysql');
const { host, user, password, database } = process.env;

const connection = mysql.createConnection({
    host,
    user,
    password,
    database,
})


// connection.connect(); // TODO: implement backend database when ready


module.exports = connection;
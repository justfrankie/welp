const mysql = require('mysql');
const { host, user, password, database } = process.env;

const connection = mysql.createConnection({
    host,
    user,
    password,
    database,
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = connection;
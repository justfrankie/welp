const mysql = require("mysql");
const { HOST, USER, PASSWORD, DATABASE } = process.env;

const connection = mysql.createConnection({
  HOST,
  USER,
  PASSWORD,
  DATABASE,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;

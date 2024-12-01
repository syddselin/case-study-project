const mysql = require("mysql");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "selin123456",
  database: process.env.DB_NAME || "testdb"
});

pool.getConnection((error, connection) => {
  if (error) {
    console.error("Error connecting to the database:", error);
    return;
  }
  console.log("Successfully connected to the database.");
  connection.release(); 
});

module.exports = pool;

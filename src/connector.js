const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env file

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
});

// Get a connection from the pool
pool.getConnection((err, conn) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.message);
        return;
    }

    console.log("Connection established with Database!!!");

    // Perform your database operations using the 'conn' object here

    // Release the connection back to the pool
    conn.release();
});

// Create a promise-based connection
const promisePool = pool.promise();

// Export the promise-based connection pool
module.exports = promisePool;

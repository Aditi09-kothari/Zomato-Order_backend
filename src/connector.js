const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "aditi123",
    database: "test",
    multipleStatements: true
});

// Get a connection from the pool
pool.getConnection((err, conn) => {
    if (err) {
        console.error(err);
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

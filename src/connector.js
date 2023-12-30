
var mysql = require('mysql2/promise');


// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "a",
//     database: "test",
//     multipleStatements: true
// });

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "aditi123",
    database: "test",
    multipleStatements: true
});


pool.getConnection((err, conn) =>{
    if(err) console.log(err)
    console.log("connection establish with Database!!!")
})

module.exports = pool.promise()
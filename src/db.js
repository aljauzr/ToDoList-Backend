const mysql = require('mysql');
//local mysql db conn
const dbConn = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password    : '',
    database    : 'todolist'
});
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
})
module.exports = dbConn;
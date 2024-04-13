const mysql = require('mysql2/promise');

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '3391',
    database: 'account101'
});

module.exports = mySqlPool;
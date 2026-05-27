const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'tri',
    password: process.env.DATABASE_PASSWORD || 'tri',
    database: process.env.DATABASE_NAME || 'tri',
});

export default connection;
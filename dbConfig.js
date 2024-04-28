const mysql = require('mysql2');
const pool = mysql.createPool({
host: '127.0.0.1',
user: 'root',
password: 'BgTHh$32Ww',
database: 'projects_example',
port: 3306
});
global.db = pool.promise();

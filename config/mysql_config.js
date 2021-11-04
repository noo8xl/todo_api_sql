const db = require('mysql2')

const mysql = db.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'task_manager'
})

mysql.connect((err) => {
  if (err) console.error(new Error(e))
})

module.exports = mysql
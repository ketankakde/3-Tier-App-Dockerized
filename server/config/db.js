const mysql = require('mysql');

function connectWithRetry() {
  const db = mysql.createConnection({
    host: 'database',
    user: 'linux',
    password: 'redhat',
    database: 'test_db'
  });

  db.connect(err => {
    if (err) {
      console.error('Database connection error:', err);
      console.log('Retrying in 5s...');
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('Connected to MySQL');
    }
  });

  return db;
}

module.exports = connectWithRetry();

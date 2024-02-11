// database.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MySQL@123',
  database: 'testlite',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Query the "appointment" table
connection.query('SELECT * FROM appointment', (err, results) => {
  if (err) {
    console.error('Error executing MySQL query:', err);
    return;
  }

  // Process the query results
  console.log('Query results from the "appointment" table:', results);

  // You can further process or display the results as needed
});

connection.end((err) => {
  if (err) {
    console.error('Error closing the MySQL connection:', err);
    return;
  }
  console.log('MySQL connection closed');
});

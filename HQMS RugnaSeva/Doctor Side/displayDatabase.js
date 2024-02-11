// const http = require('http');
// const mysql = require('mysql2');

// // Create a MySQL connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'MySQL@123',
//   database: 'TESTLite',
// });

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<html><head><title>Patient Information</title></head><body>');

//   // Query the "appointment" table
//   connection.query('SELECT name, symptoms, gender, department FROM appointment', (err, results) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.write('Error fetching data from the database.');
//       res.end();
//       return;
//     }

//     // Display the data as an HTML table
//     res.write('<h1>Patient Information</h1>');
//     res.write('<table>');
//     res.write('<tr><th>Name</th><th>Symptoms</th><th>Gender</th><th>Department</th></tr>');
//     results.forEach((row) => {
//       res.write('<tr>');
//       res.write(`<td>${row.name}</td>`);
//       res.write(`<td>${row.symptoms}</td>`);
//       res.write(`<td>${row.gender}</td>`);
//       res.write(`<td>${row.department}</td>`);
//       res.write('</tr>');
//     });
//     res.write('</table>');

//     res.write('</body></html>');
//     res.end();
//   });
// });

// // Start the HTTP server
// const port = 4000;
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

//displayDatabase.js
const http = require('http');
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

// Read CSS
const cssContent = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MySQL@123',
  database: 'TESTLite',
});

// Read the patient.html file
const patientHtml = fs.readFileSync(path.join(__dirname, 'patient.html'), 'utf8');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Query the "appointment" table
  connection.query('SELECT name, symptoms, gender, department FROM appointment', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.end();
      return;
    }

    // Create the patient table
    const tableHtml = createPatientTable(results);

    // Replace the placeholder in patientHtml with the table
    const updatedHtml = patientHtml.replace('<!-- INSERT_TABLE_HERE -->', tableHtml);

    // Include CSS styles in the response
    const finalHtml = `<style>${cssContent}</style>${updatedHtml}`;

    // Send the updated HTML as the response
    res.end(finalHtml);
  });
});

function createPatientTable(data) {
    // Group the data by department
    const departmentGroups = {};
    data.forEach((row) => {
      if (!departmentGroups[row.department]) {
        departmentGroups[row.department] = [];
      }
      departmentGroups[row.department].push(row);
    });
  
    // Generate a table for each department
    let tables = '';
    for (const department in departmentGroups) {
      tables += `<h2 id="${department}">${department} Department</h2>`;
      tables += '<table>';
      tables += '<tr><th>Name</th><th>Symptoms</th><th>Gender</th><th>Department</th></tr>';
      tables += '<tbody>';
  
      departmentGroups[department].forEach((row) => {
        tables += '<tr>';
        tables += `<td>${row.name}</td>`;
        tables += `<td>${row.symptoms}</td>`;
        tables += `<td>${row.gender}</td>`;
        tables += `<td>${row.department}</td>`;
        tables += '</tr>';
      });
  
      tables += '</tbody>';
      tables += '</table>';
    }
  
    return tables;
  }
  
  
  

// Start the HTTP server
const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

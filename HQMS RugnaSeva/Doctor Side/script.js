// script.js

//Login
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Define an array of objects with username, password, and corresponding HTML page pairs
    var validCredentials = [
        { username: "Med.Verma", password: "admin123", page: "home.html" },
        { username: "Med.Kalu", password: "admin456", page: "home24.html" }
        // Add more objects as needed
    ];

    // Check if the entered credentials match any valid set
    var isValidLogin = false;
    var redirectPage = "";
    for (var i = 0; i < validCredentials.length; i++) {
        if (username === validCredentials[i].username && password === validCredentials[i].password) {
            isValidLogin = true;
            redirectPage = validCredentials[i].page;
            break;
        }
    }

    if (isValidLogin) {
        window.location.href = redirectPage;
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}



//Home page dept js
const cards = document.querySelectorAll(".card a");

cards.forEach(card => {
    card.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        const department = this.getAttribute("href").split("?dept=")[1];
        window.location.href = "patient.html?dept=" + department;
    });
});

// JavaScript to extract and display the selected department
// script.js
window.onload = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const department = urlParams.get("dept");

    if (department) {
        const deptNameElement = document.getElementById("dept-name");
        deptNameElement.textContent = department;

        // Fetch patient data based on the selected department
        fetch('/getPatients')
            .then((response) => response.json())
            .then((data) => {
                const tableBody = document.getElementById('table-body');
                tableBody.innerHTML = ''; // Clear the table body

                // Populate the table with data
                data.forEach((patient) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${patient.name}</td>
                        <td>${patient.gender}</td>
                        <td>${patient.symptoms}</td>
                        <td>${patient.department}</td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch((error) => {
                console.error('Error fetching patient data:', error);
            });
    }
};


  // JavaScript to handle sorting
  document.addEventListener('DOMContentLoaded', function () {
    const departmentHeader = document.querySelector('.sortable[data-sort="department"]');
    departmentHeader.addEventListener('click', function () {
      const rows = Array.from(document.querySelectorAll('tbody tr'));

      rows.sort((a, b) => {
        const departmentA = a.lastElementChild.textContent;
        const departmentB = b.lastElementChild.textContent;

        if (departmentA < departmentB) return -1;
        if (departmentA > departmentB) return 1;
        return 0;
      });

      const tbody = document.querySelector('tbody');
      rows.forEach((row) => tbody.appendChild(row));
    });
  });



//// SEARCH 




// // TABLE - DATABASE
// script.js
const database = require('./database.js');
// displayDatabase
const tableContainer = document.getElementById('table-container'); // Replace 'table-container' with the actual ID or selector of your HTML element.
// ...
// Create the table and populate it with the fetched data.
// ...
tableContainer.appendChild(table); // Append the table to your HTML element.




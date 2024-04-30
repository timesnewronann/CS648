// CREATE AN ARRAY OF EMPLOYEES
let employees = [];

// Function to create an employee row
function createEmployeeRow(employee) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.extension}</td>
        <td>${employee.email}</td>
        <td>${employee.department}</td>
        <td><button onclick="deleteEmployee('${employee.id}')">Delete</button></td>
    `;
    return row;
}

// Function to delete an employee by ID (used by delete button in the grid)
function deleteEmployee(employeeId) {
    // It's necessary to use a string comparison if the IDs are stored as strings
    employees = employees.filter(employee => employee.id.toString() !== employeeId.toString());
    buildGrid();
}

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
document.addEventListener('DOMContentLoaded', () => {
    employees = JSON.parse(localStorage.getItem('employees')) || [];
    if (employees.length === 0) {
        // Populate with initial data if no data is present
        employees = [
            // Add initial employee objects
            { id: '12345678', name: 'John Doe', extension: '1234', email: 'john.doe@example.com', department: 'Engineering' },
            { id: '87654321', name: 'Ronan Borja', extension: '4321', email: 'ronanborja26@gmail.com', department: 'Engineering' },
            // ... more employee objects
        ];
    }
    buildGrid();
});

// GET DOM ELEMENTS
const form = document.getElementById('addForm');
const employeeTable = document.getElementById('empTable');
const employeeCount = document.getElementById('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
function buildGrid() {
    const tbody = employeeTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear existing rows
    employees.forEach(employee => {
        tbody.appendChild(createEmployeeRow(employee));
    });
    // UPDATE EMPLOYEE COUNT
    employeeCount.textContent = `Total Employees: ${employees.length}`;
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
}

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    e.preventDefault(); // PREVENT FORM SUBMISSION
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const newEmployee = { id, name, extension, email, department }; // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    employees.push(newEmployee); // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    buildGrid(); // BUILD THE GRID
    form.reset(); // RESET THE FORM
    document.getElementById('id').focus(); // SET FOCUS BACK TO THE ID TEXT BOX
});

// DELETE EMPLOYEE
employeeTable.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (confirm('Are you sure you want to delete this employee?')) { // CONFIRM THE DELETE
            const employeeId = e.target.parentNode.parentNode.firstChild.textContent;
            deleteEmployee(employeeId); // REMOVE EMPLOYEE FROM ARRAY AND REBUILD THE GRID
        }
    }
});

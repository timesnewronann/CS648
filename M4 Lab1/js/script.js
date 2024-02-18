//Add an employee, view an employee via a tabular interface, and then delete an employee from the table 

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
//form
const form = document.getElementById('addForm');

//table
const employeeTable = document.getElementById('employees');

//employee count
let employeeCount = document.getElementById('empCount');


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0; // total employees we started with so far

// update employee count as we add more 
function updateEmployeeCount() {
    employeeCount.textContent = `Total Employees: ${count}`; // Use backticks for template literals
}


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var extension = document.getElementById('extension').value;
    var email = document.getElementById('email').value;
    var department = document.getElementById('department').value;


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    var newRow = employeeTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    var cellID = newRow.insertCell(0);
    var cellName = newRow.insertCell(1);
    var cellExtension = newRow.insertCell(2);
    var cellEmail = newRow.insertCell(3);
    var cellDepartment = newRow.insertCell(4);
    var cellDelete = newRow.insertCell(5); // used for deleting

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger';
    deleteButton.onclick = function () {
        if (confirm('Are you sure you want to delete this employee?')) {
            employeeTable.deleteRow(newRow.rowIndex - 1);
            count -= 1;
            updateEmployeeCount();
        }
    };
    cellDelete.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count += 1;
    updateEmployeeCount();
});

// DELETE EMPLOYEE
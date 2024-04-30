// Create the front-end 'Add Employee' web form for an employee management system.
// Use bootstrap for the primary styling of the form
// Style the form tag to look like professor's design.
// Within the form create six form elements. The specs are outlined
// Make sure to add labels for each input and select element.
// Add a submit button that when clicked, will call a JavaScript function that will process your code 

//JavaScript
//Once the user fills out the form, the submission of the form should be processed through a JavaScript handler.
//Results should be displayed in the console window (exactly the same way outlined)
//  Need to handle the load event of the window object. We will receive an error other wise when the page loads.
//  In the load handler create a helper function that you can use to process the selection of the form and each form element within the form
//  Create an event listner that handles the form's submission. This will be attached to the form itself, not the submit button.
//  Within the handler for the form's submission, you'll need to cancel the default behavior of the form.
//  The form will want to submit by default. You want to prevent this so you can display the values of the form elements within the console window without
//  the form trying to submit to a non-existent action.
//  Collect all of the values from the form elements and display them within the console window.

// Use only arrow functions in your code
// Make code concise, no more than 15 lines of code in the script.

//1. Create an event listener that handles the form's submission. Will be attached to the form itself, not the submit button. 
// wait for the window to load before running the script or we'll get errors
"use strict";

window.addEventListener('load', () =>{
    //Get the form element
    const employeeForm = document.getElementById('employeeForm');

    //add an event listener
    employeeForm.addEventListener('submit', event=> {
        //prevent the default form submission from occuring
        //"The form will want to submit by default. You want to prevent this"
        event.preventDefault();

        //Get the value of the ID input 
        //Get the value of the full name 
        const id = document.getElementById('id').value;
        const fullname = document.getElementById('fullname').value;
        const extension = document.getElementById('extension').value;
        const email = document.getElementById('email').value;
        const department = document.getElementById('department').value;

        console.log(`ID: ${id}`);
        console.log(`Full Name: ${fullname}`);
        console.log(`4-Digit Extension: ${extension}`);
        console.log(`Email: ${email}`);
        console.log(`Department: ${department}`);
    })
    
});
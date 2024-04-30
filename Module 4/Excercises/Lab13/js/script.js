// Purpose of this lab is demonstrate how DOM Scripting can be used in conjuction with forms and form objects. In this application, you will build
// a basic registration form. You will then use JavaScript code and DOM scripting techniques to validate that the user entered data into text boxes
// selected an item from a drop down list, and checked a check box before selecting a Register button and then redirecting the user to a "thank you for registering" page.

/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var processEntries = function () {
    "use strict";
    var header = "", html = "", required, msg, email, phone, country, contact, terms;
    required = "<span>Required field</span>";
    msg = "Please review your entries and complete all required fields.";
    email = $("email_address").value;
    phone = $("phone").value;
    country = $("country").value;
    contact = "Text";
    if ($("email").checked) {
        contact = "Email";
    }
    if ($("none").checked) {
        contact = "none";
    }
    terms = $("terms").checked;
    if (email === "") {
        email = required;
        header = msg;
    }
    if (phone === "") {
        phone = required;
        header = msg;
    }
    if (country === "") {
        country = required;
        header = msg;
    }

    $("registration_header").firstChild.nodeValue = header;
    if (header === msg) {
        html= html + "<tr><td>Email:</td><td>" + email + "</td></tr>"; 
        html= html + "<tr><td>Phone:</td><td>" + phone + "</td></tr>"; 
        html= html + "<tr><td>Country:</td><td>" + country + "</td></tr>"; 
        html= html + "<tr><td>Contact:</td><td>" + contact + "</td></tr>";
        html= html + "<tr><td>Terms:</td><td>" + terms + "</td></tr>";  
        $("registration_info").innerHTML = html;
    } else {
        $("registration_info").innerHTML = "";
        $("registration_form").submit();
    }


};

var resetForm = function () {
    "use strict";
    $("registration_form").reset();
    //TODO: Clearing of Error Header

    $("email_address").focus();

};

window.addEventListener("load", function () {
    "use strict"
    $("register").addEventListener("click",processEntries);
    $("reset_form").addEventListener("click",resetForm);
    $("email_address").focus();
});
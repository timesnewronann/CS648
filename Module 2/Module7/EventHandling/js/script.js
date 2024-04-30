

function init() {
    "use strict";
    var myButton = window.document.getElementById("myButton");
    myButton.addEventListener("click", function () { // call back function
        window.alert("Hello World");
    });
}


window.addEventListener("load", init);
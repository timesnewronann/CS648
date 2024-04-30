function init() {
    "use strict";
    var myButton = window.document.getElementById("myButton");
    myButton.addEventListener("click", function (e) {
        window.alert(e.target);
    });
}

window.addEventListener("load", init);
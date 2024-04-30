// Purpose of this application is demonstrate how DOM scripting techniques can be applied to build an application that has "accordion"-type functionality.
// In this application, an accordion will be designed and the content within each heading will be shown and hidden programmatically using DOM scripting techniques.
// Additionally, a + and - image will appear next to each heading, a + when the panel is closed, and a - when the panel is open. These images will be manipulated programmatically using DOM Scripting Techniques

/*eslint-env browser*/

// define variables
//create helper functions which will get the elements from the DOM
//create a toggle function and an eventListner function

var i, h2, div, h2Elements, faqs;

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

//event handler

var toggle = function (e) {
    "use strict";
    h2 = e.currentTarget;
    div = h2.nextElementSibling;
    h2Elements = faqs.getElementsByTagName("faqs");
    for (i = 0; i < h2Elements.length; i+=1) {
        if (h2Elements[i] !== e.currentTarget) {
            h2Elements[i].removeAttribute("class");
            h2Elements[i].nextElementSibling.removeAttribute("class");
        }
    }
    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    }
    else {
        h2.setAttribute("class", "minus"); 
    }

    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
    }
    else {
        div.setAttribute("class", "open"); 
    }
};

window.addEventListener("load", function () {
    "use strict";
    faqs = $("faqs");
    h2Elements = faqs.getElementsByTagName("h2");
    for (i = 0; i < h2Elements.length; i+=1) {
        h2Elements[i].addEventListener("click", toggle);
    }
    h2Elements[0].firstChild.focus();
});
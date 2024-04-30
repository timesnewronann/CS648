/* eslint-env browser*/

// window.addEventListener("load", function () {
//     // var elem = window.document.getElementById("linkList");
//     // window.console.log(elem.attributes[0].nodeType);
//     "use strict";
//     // window.document.write("Please join our email list");
//     var newH1 = window.document.createElement("h1");
//     var content = window.document.createTextNode("Join our email list");
//     newH1.appendChild(content);
//     var element = window.document.getElementById("emailform");
//     window.document.body.insertBefore(newH1, element);


// });

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", function () {
    "use strict";
    var xhr, xmlDoc, team, i;

    xhr = new XMLHttpRequest();
    xhr.open("GET", "data/team.xml");
    xhr.send();
    xhr.addEventListener("readystatechange",function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            xmlDoc = xhr.responseXML;
            team = xmlDoc.getElementsByTagName("teammember");
            html = "";
            for (i = 0; i < team.length; i+=1) {
                $("team").innerHTML += xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue + "<br>" + 
                xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue + "<br>" + 
                 xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue + "<br><br>";
            }
        }else {
            window.alert("There was an error connecting to the document.");
        }
    });
});


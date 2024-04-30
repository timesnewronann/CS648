window.addEventListener("DOMContentLoaded", function() {
    // Define global variables
    var monthlyRate;
    var months;
    var futureValue;
    var montlhyInterest;
    var rate;
    var years;
    var investment;
    var i;
    var output;
    var calculate;

    // Get DOM elements from the page
    investment = document.getElementById("investment");
    rate = document.getElementById("interest");
    years = document.getElementById("years");
    output = document.getElementById("futureValue");
    calculate = document.getElementById("calculate");

    // Define functions
    // Calculate the future value
    function calculateInvestment(investment, rate, years) {
        "use strict";
        monthlyRate = rate / 12 / 100;
        months = years * 12;
        futureValue = 0.0;

        for (i = 0; i <= months; i += 1) {
            futureValue += investment;
            montlhyInterest = investment * monthlyRate;
            futureValue += montlhyInterest;
        }

        return futureValue;
    }

    // Get the values from the DOM elements, calculate, and display result
    calculate.addEventListener("click", function () {
        "use strict";
        var inv = parseFloat(investment.value); // grab value of text box and store into investment variable
        var rte = parseFloat(rate.value);
        var yrs = parseInt(years.value, 10);

        futureValue = calculateInvestment(inv, rte, yrs);

        output.innerHTML = "Future value: $" + Math.round(futureValue) + ".00";
    });
});

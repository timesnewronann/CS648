/* eslint env browser */

//declare variables
var customerType;

var invoiceTotal;

var discountPercent;

var discountAmount;

var newinvoiceTotal;

//header
window.document.write("Welcome to the invoice application!");

customerType = window.prompt("Enter customer type (r/w)");

invoiceTotal = parseFloat(window.prompt("Enter invoice total"));

if (customerType === "r") {
    if (invoiceTotal > 0 && invoiceTotal < 100) {
        discountPercent = 0;
    } else if (invoiceTotal >= 100 && invoiceTotal < 250) {
        discountPercent = 0.1;
    } else if (invoiceTotal >= 250 && invoiceTotal < 500){
        discountPercent = 0.2

    } else if (invoiceTotal >= 500){
        discountPercent = 0.25
    }

}else if (customerType === "w"){
    if (invoiceTotal > 0 && invoiceTotal < 500) {
        discountPercent = 0.4;
    } else if (invoiceTotal >=500) {
        discountPercent = 0.5;
    }
}else{
    discountPercent = 0;
}

discountAmount = discountPercent * invoiceTotal;
newinvoiceTotal = invoiceTotal - discountAmount;

window.document.write("Invoice Total is: " + String(invoiceTotal) + "<br>");
window.document.write("Discount Percent: " + String(discountPercent) + "<br>");
window.document.write("Discount Amount is: " + String(discountAmount) + "<br>");
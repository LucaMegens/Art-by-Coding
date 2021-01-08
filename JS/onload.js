//Short Script for the delay of the text. This function will change the display style of "myDiv" from "none" to "Block" after a 5 second delay on load of the index page.

var TimeOut;

function myFunction() {
  TimeOut = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("myDiv").style.display = "block";
}
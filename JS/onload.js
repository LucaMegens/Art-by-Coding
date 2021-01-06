var TimeOut;
//Short Script for the delay of the text
function myFunction() {
  TimeOut = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("myDiv").style.display = "block";
}
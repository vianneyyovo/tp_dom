// First demo
document.getElementById("text").innerHTML = "My first set propriety";

//Copyright
const copyright = document.querySelector("footer");
copyright.innerHTML = "&copy; "
const copyDate = new Date();

const currentYear = copyDate.getFullYear();

copyright.append(currentYear);
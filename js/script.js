// First demo
document.getElementById("text").innerHTML = "My first set propriety";

// Second demo


//Copyright
const copyright = document.querySelector("footer");
copyright.innerHTML = "&copy; "
const copyDate = new Date();

const currentYear = copyDate.getFullYear();

copyright.append(currentYear);
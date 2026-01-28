// kanye function
const kanyeBtn = document.getElementById("kanyeButton");
const kanyeDiv = document.getElementById ("kanyeQuote");

const kanye = async function () {
const response = await fetch("https://api.kanye.rest/");
const data = await response.json();
const quote = data.quote;
console.log(quote);
// console.log("test");
kanyeDiv.innerHTML = quote;
}

// strip function
const stripBtn = document.getElementById("stripButton");
const stripDiv = document.getElementById ("stripQuote");

const strip = async function () {
const response = await fetch("https://api.nationalize.io/?name=bock");
const data = await response.json();
const quote = data.quote;
console.log(quote);
// console.log("test");
stripDiv.innerHTML = quote;
}


kanyeBtn.addEventListener("click", kanye);
stripBtn.addEventListener("click", strip);
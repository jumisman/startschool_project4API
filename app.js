
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

kanyeBtn.addEventListener("click", kanye);
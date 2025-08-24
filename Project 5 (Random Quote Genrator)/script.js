const btn = document.getElementById('button');
const quote = document.getElementById('quote');
// This function simulate like Fatcing api
let quotesapi = async () => {
  let response = await fetch("quote.json");
  let data = await response.json();
  let quoteI =  Math.floor(Math.random()*49);
  console.log(quoteI);
  quote.innerHTML = data[quoteI];
}
// calling funciton because its show quote on page starting
quotesapi();
// adding eventlistner on button to change quite every time;
btn.addEventListener('click', quotesapi);
const text = document.getElementById("text");
const input = document.getElementById("input");
const btn = document.getElementById("button");
const time = document.getElementById("Time");
const speed = document.getElementById("Speed");
const acuracy = document.getElementById("Accuracy");
// converting sting into array
let ntext = text.innerText.trim(); //This will remove space from start and end of words
let words = ntext.split(/\s+/); //This will conver string into array
text.innerHTML = words.map((w) => `<span>${w}</span>`).join(" "); // this will place every word into span we use these span to color text
let wordSpans = text.querySelectorAll("span"); // real span elements
// function for What should happend if we click on start button
function clicked() {
  btn.innerHTML = "STARTED";
  input.value = " ";
  input.addEventListener("keydown", startTypin);
  Time();
}
let CorrectWord = 0;
let WrongWord = 0;
//Checking acuracy
function chacuracy() {
  wordSpans.forEach((w) => {
    if (w.style.color === "green") {
      CorrectWord++;
    } else if (w.style.color === "red") {
      WrongWord++;
    }
  });
}
//function for what should happend when we start typing
let TypedWords = 0;
function startTypin() {
  let typedtext = input.value.trim();
  let typedwords = typedtext.split(/\s+/);
  let wordslenght = typedwords.length;
  TypedWords = wordslenght;
  speed.innerHTML = `SPEED <br> ${wordslenght} wpm`;
  wordSpans.forEach((span, i) => {
    if (typedwords[i] === words[i]) {
      span.style.color = "green";
    } else if (typedwords[i]) {
      let y = (span.style.color = "red");
    } else {
      span.style.color = "white";
    }
  });
  let currentWord = wordSpans[typedwords.length - 1];
  if (currentWord) {
    currentWord.scrollIntoView({
      behavior: "smooth",
      block: "center", // keeps next line visible
    });
  }
}
btn.addEventListener("click", clicked);
// calculating time
function Time() {
  let T = 60;
  let TotatlTimer = setInterval(() => {
    time.innerHTML = `Time <br> ${T}s`;
    T--;
    if (T === 0) {
      clearInterval(TotatlTimer);
      time.innerHTML = `Time Up <br> ${T}s`;
      time.style.color = "red";
      speed.style.color = "green";
      input.removeEventListener("keydown", startTypin);
      btn.removeEventListener("click", clicked);
      btn.innerHTML = "START";
      input.disabled = true;
      chacuracy();
      acuracy.innerHTML = `Accuracy<br>${Math.floor(
        (CorrectWord / TypedWords) * 100
      )}%`;
    }
  }, 1000);
}
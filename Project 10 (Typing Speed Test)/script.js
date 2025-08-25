// script.js and scrip2.js are same file script2.js has shorter code and easy to understand
const givenText = document.getElementById("text");
const typingArea = document.getElementById("input");
const startBtn = document.getElementById("button");
const time = document.getElementById("Time");
const speed = document.getElementById("Speed");
const acuracy = document.getElementById("Acuracy");

// Making array from given text
let textArray = givenText.innerHTML.trim().split(/\s+/);
givenText.innerHTML = textArray.map((text) => `<span>${text}</span>`).join(" "); //maping array all element because we cannot apply color on array

//Selecting all words
const spanArray = givenText.querySelectorAll("span");

// Function what happened when we start typing
function typing() {
  let TypedWords = typingArea.value.trim().split(/\s+/);
  spanArray.forEach((x, ind) => {
    if (x.innerHTML === TypedWords[ind]) {
      x.style.color = "green";
    } else if (TypedWords[ind]) {
      x.style.color = "red";
    } else {
      x.style.color = "white";
    }
  });
  let currentWord = spanArray[TypedWords.length-1]
  if(currentWord){
    currentWord.scrollIntoView({
        behavior: 'smooth',
    })
  }
}

startBtn.addEventListener("click", () => {
  startBtn.innerHTML = "STARTED";
  timeinterval();
  typingArea.addEventListener("keydown", typing);
});

// let interval = setInterval(startBtn,1000);
T = 0;
function timeinterval() {
  interval = setInterval(() => {
    T++;
    time.innerHTML = `Time <br> ${T}`;
    if (T >= 60) {
      time.innerHTML = `Time's up <br> ${T}s`;
      time.style.color = "red";
      typingArea.disabled = true;
      clearInterval(interval);
      SpeedAcuracyCalculate();
    }
  }, 1000);
}

// Given function calculate speed and Acuracy
let correctTyped = 0;
let wrongTyped = 0;
function SpeedAcuracyCalculate() {
  spanArray.forEach((x) => {
    if (x.style.color === "green") {
      correctTyped++;
    }
    if (x.style.color === "red") {
      wrongTyped++;
    }
  });
  speed.innerHTML = `Speed <br>${correctTyped + wrongTyped}wpm`;
  Total = correctTyped + wrongTyped;
  acurate = Math.floor((correctTyped / Total) * 100);
  acuracy.innerHTML = `Accuracy <br> ${acurate}`;
}
const gameopt = document.querySelectorAll(".option");
const yourChos = document.getElementById("Uchose");
const comChos = document.getElementById("Chose");
const result = document.getElementById('result');
const Uscose = document.getElementById("Uscore");
const Cscore = document.getElementById("Cscore");
let computerScore = 0;
let UserScore = 0;
// winning satuations
// If win then user score increase and if lose then computer score increase
function win(){
if(comChos !== "" && comChos.innerHTML === yourChos.innerHTML){
    console.log("match is draw");
    result.innerHTML = "Draw";
    result.style.backgroundColor = "gray";
} else if(yourChos.innerHTML === "Rock" && comChos.innerHTML === "Paper"){
    console.log("you lose");
    result.innerHTML = "You lose";
    result.style.backgroundColor = "red";
    computerScore++;
} else if(yourChos.innerHTML === "Rock" && comChos.innerHTML === "Scissor"){
    console.log("you win");
    result.innerHTML = "You Win";
    result.style.backgroundColor = "green";
    UserScore++;
} else if(yourChos.innerHTML === "Paper" && comChos.innerHTML === "Scissor"){
    console.log("you lose");
    result.innerHTML = "You lose";
    result.style.backgroundColor = "red";
    computerScore++;
} else if(yourChos.innerHTML === "Paper" && comChos.innerHTML === "Rock"){
    console.log("you win");
    result.innerHTML = "You Win";
    result.style.backgroundColor = "green";
    UserScore++;
} else if(yourChos.innerHTML === "Scissor" && comChos.innerHTML === "Rock"){
    console.log("you lose");
    result.innerHTML = "You lose";
    result.style.backgroundColor = "red";
    computerScore++;
} else if(yourChos.innerHTML === "Scissor" && comChos.innerHTML === "Paper"){
    console.log("you win");
    result.innerHTML = "You Win";
    result.style.backgroundColor = "green";
    UserScore++;
}
}
// Choseing option
gameopt.forEach((opt) => {
    // Chose option by user
  opt.addEventListener("click", (e) => {
    let x = e.target.nextElementSibling;
    console.log(x.innerHTML);
    yourChos.innerHTML = x.innerHTML;
    // Chose option by computer
    y = Math.floor(Math.random() * 3);
    comp = gameopt[y].children[1].innerHTML;
    console.log(comp);
    comChos.innerHTML=comp;
    win()
    Uscose.innerHTML = UserScore;
    Cscore.innerHTML = computerScore;
  });
});
const boxs = document.querySelectorAll(".box");
const winner = document.getElementById("winner");
const reset = document.getElementById("reset");
const newgame = document.getElementById('newGame');
let turnO = true;
// funcition for win
function win(y) {
  if (
    // winning patterns in rows
    (boxs[0].innerHTML === boxs[1].innerHTML &&
      boxs[0].innerHTML === boxs[2].innerHTML &&
      boxs[0].innerHTML !== "") ||
    (boxs[3].innerHTML === boxs[4].innerHTML &&
      boxs[3].innerHTML === boxs[5].innerHTML &&
      boxs[3].innerHTML !== "") ||
    (boxs[6].innerHTML === boxs[7].innerHTML &&
      boxs[6].innerHTML === boxs[8].innerHTML &&
      boxs[6].innerHTML !== "") ||
    // winning patterns in column
    (boxs[0].innerHTML === boxs[3].innerHTML &&
      boxs[0].innerHTML === boxs[6].innerHTML &&
      boxs[0].innerHTML !== "") ||
    (boxs[1].innerHTML === boxs[4].innerHTML &&
      boxs[1].innerHTML === boxs[7].innerHTML &&
      boxs[1].innerHTML !== "") ||
    (boxs[2].innerHTML === boxs[5].innerHTML &&
      boxs[2].innerHTML === boxs[8].innerHTML &&
      boxs[2].innerHTML !== "") ||
    // winning patterns corner to coner
    (boxs[0].innerHTML === boxs[4].innerHTML &&
      boxs[0].innerHTML === boxs[8].innerHTML &&
      boxs[0].innerHTML !== "") ||
    (boxs[2].innerHTML === boxs[4].innerHTML &&
      boxs[2].innerHTML === boxs[6].innerHTML &&
      boxs[2].innerHTML !== "")
  ) {
    console.log(`winner is ${y}`);
    winner.innerHTML = `Winner is ${y}`;
    disableGame();
  }
}
// 
boxs.forEach((box, ind) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
      box.style.pointerEvents = "none";
      box.style.backgroundColor = "rgb(255, 190, 69)";
      win(box.innerHTML);
    } else {
      box.innerHTML = "X";
      console.log(ind);
      turnO = true;
      box.style.pointerEvents = "none";
      box.style.backgroundColor = "rgb(255, 190, 69)";
      win(box.innerHTML);
    }
  });
});
// Disable all remaning game box if any player wins
function disableGame() {
  boxs.forEach((box) => {
    box.style.pointerEvents = "none";
  });
  reset.style.display = "none";
  newgame.style.display = "block";
}
// Adding Reset Button
reset.addEventListener('click', ()=>{
  boxs.forEach((box)=>{
    box.innerHTML = "";
    box.style.backgroundColor = "orange";
    box.style.pointerEvents = "auto";
    turnO = true;
  })
})
// Start New Game
newgame.addEventListener('click', ()=>{
  boxs.forEach((box)=>{
    box.innerHTML = "";
    box.style.backgroundColor = "orange";
    box.style.pointerEvents = "auto";
    turnO = true;
    winner.innerHTML = "";
    newgame.style.display = "none";
    reset.style.display = "block";
  })
})
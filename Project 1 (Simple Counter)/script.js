const counter = document.querySelector(".counter");
const previous = document.getElementById("previous");
const reset = document.getElementById("Reset");
const next = document.getElementById("Next");
let innervalue = Number(counter.innerHTML);
// next button
next.addEventListener("click", () => {
   if(innervalue>-1){
    counter.innerHTML = innervalue+1;
    innervalue++;
  }
});
// previous button
previous.addEventListener('click', ()=>{
    if(innervalue>0){
    counter.innerHTML = innervalue-1;
    innervalue--;
    }
});
// reset button
reset.addEventListener('click', () =>{
    counter.innerHTML = 0;
    innervalue = 0;
});
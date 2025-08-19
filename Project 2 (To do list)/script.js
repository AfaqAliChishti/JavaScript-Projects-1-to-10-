const input = document.getElementById("input");
const addbtn = document.getElementById("addbtn");
const deletebtn = document.querySelectorAll(".deletebtn");
const ticks = document.querySelectorAll(".tick");
const tasks = document.getElementById("tasks");
const texts = document.querySelectorAll(".text");
const newtasks = document.querySelectorAll(".newtask");
addbtn.addEventListener("click", () => {
  if (input.value !== "") {
    let newtask = document.createElement("div");
    newtask.className = "newtask";
    let dot = document.createElement("div");
    dot.className = "tick";
    newtask.appendChild(dot);
    let taskname = document.createElement("p");
    taskname.innerHTML = input.value;
    newtask.appendChild(taskname);
    let deletebtn = document.createElement("button");
    deletebtn.className = "btn deletebtn";
    deletebtn.innerHTML = "Delete";
    newtask.appendChild(deletebtn);
    tasks.appendChild(newtask);
  }
});

// this code work on both data means data that already avalible in html and load on page load
// and also work on that data that is live transmitted means create by javascript
tasks.addEventListener('click', (e)=>{
  if (e.target.classList.contains('tick')){
    e.target.style.backgroundColor = "black";
    e.target.nextElementSibling.style.textDecoration = "line-through";
  }
  if(e.target.classList.contains('deletebtn')){
    e.target.parentElement.style.display = 'none';
  }
});

// the below code only works on that data that is already avalible html not JavaScript emitted

// for(let i=0; i<ticks.length; i++){
//   let tick = document.querySelectorAll('.tick');
//   tick[i].addEventListener('click', ()=>{
//     tick[i].style.backgroundColor = "black";
//     texts[i].style.textDecoration = "line-through";
//     console.log(`You and on ${i} node`)
//   })
// }
// for(let i=0; i<deletbtn.length; i++){
//   deletbtn[i].addEventListener('click', ()=>{
//     newtasks[i].style.display = "none";
//   })
// }

const left = document.getElementById("left");
const right = document.getElementById("right");
const slider = document.getElementById("slider");
const frame = document.getElementById("frame");
const picturs = document.querySelectorAll("img");
const dots = document.getElementById("dots");
// calculating width of picture for translate
let width = frame.clientWidth;
// Making dots according to number of pictures
picturs.forEach(() => {
  let dot = document.createElement("div");
  dot.className = "dot";
  dots.appendChild(dot);
});
// Assing dot below because they create after loding page so we can not access before initializing
const dot = document.querySelectorAll(".dot");
// Filling color in dot on clicking
dot.forEach((dt, ind) => {
  dt.addEventListener("click", () => {
    dot.forEach((d) => {
      d.style.backgroundColor = "transparent";
    });
    dt.style.backgroundColor = "white";
    slider.style.transform = `translate(-${width * ind}px)`;
  });
});
//making function for right side button
// using i as variable
let i = 0;
function rightside(){
    if (i < picturs.length-1) {
    slider.style.transform = `translateX(-${(i+1)*width}px)`;
    i++;
  } else {
    i = 0;
    slider.style.transform = `translateX(-${width * 0}px)`;
  }
  dot.forEach((d) => {
      d.style.backgroundColor = "transparent";
    });
    dot[i].style.backgroundColor = "white";
}
// making function for left side button
function leftside(){
    if (i>0) {
    i--;
    slider.style.transform = `translateX(-${width * i}px)`;
    
  } else {
    i = picturs.length - 1;
    slider.style.transform = `translateX(-${width * i}px)`;
  }
  dot.forEach((d) => {
      d.style.backgroundColor = "transparent";
    });
    dot[i].style.backgroundColor = "white";
}
right.addEventListener("click", rightside);
left.addEventListener('click', leftside);
// making slide show for pictures
let interval = setInterval(rightside, 5000);
// Stop on entering mouse and resume on leaving mouse
frame.addEventListener("mouseover",()=>{
  clearInterval(interval);
});
frame.addEventListener("mouseout",()=>{
  interval = setInterval(rightside, 5000);
});
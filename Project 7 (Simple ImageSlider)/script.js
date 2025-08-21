const left = document.querySelector(".left");
const right = document.querySelector(".right");
const frame = document.querySelector(".frame");
const slider = document.querySelector(".slider");
const pictures = document.querySelectorAll(".pic");
// storing width of frame in variable
const width = frame.offsetWidth;
const totalpics = pictures.length;
let i = 1;
// making dots
const dots = document.querySelector(".dots");
for (let i = 0; i < totalpics; i++) {
  const dot = document.createElement("div");
  dot.className = "dot";
  dots.appendChild(dot);
}
// accessing every dots
const dot = document.querySelectorAll(".dot");
totaldots = dot.length;
// Storing whole right click function in variable (rightside)
function rightside (){
  if (i < totalpics) {
    x = width * i;
    slider.style.transform = `translateX(-${x}px)`;
    console.log(`you are on slide number ${i + 1}`);
    // filling dots according to picture
    for (let j = 0; j < totaldots; j++) {
      dot[j].style.backgroundColor = "transparent";
    }
    dot[i].style.backgroundColor = "white";
    // end of filling dots function
    i++;
  } else {
    i = 1;
    slider.style.transform = `translateX(0px)`;
    dot[i - 1].style.backgroundColor = "white";
    console.log(`you are on slide number ${i}`);

    // filling dots according to picture
    for (let j = 0; j < totaldots; j++) {
      dot[j].style.backgroundColor = "transparent";
    }
    dot[0].style.backgroundColor = "white";
    // end of filling dots function
  }
} 
// storing whole left click function in variable (leftside)
function leftside(){
if (i > 1) {
    i--;
    x = (i - 1) * width;
    slider.style.transform = `translateX(-${x}px)`;
    console.log(`you are on slide number ${i}`);
    // filling dots according to picture
    for (let j = 0; j < totaldots; j++) {
      dot[j].style.backgroundColor = "transparent";
    }
    dot[i - 1].style.backgroundColor = "white";
    // end of filling dots function
  } else {
    i = totalpics;
    x = (i - 1) * width;
    slider.style.transform = `translateX(-${x}px)`;
    console.log(`you are on slide number ${i}`);
    // filling dots according to picture
    for (let j = 0; j < totaldots; j++) {
      dot[j].style.backgroundColor = "transparent";
    }
    dot[i-1].style.backgroundColor = "white";
    // end of filling dots function
  }
}
// setting right button
right.addEventListener('click', rightside);
// setting left button
left.addEventListener("click", leftside);
// filling color in dots
for (let i = 0; i < totaldots; i++) {
  dot[i].addEventListener("click", () => {
    for (let j = 0; j < totaldots; j++) {
      dot[j].style.backgroundColor = "transparent";
    }
    dot[i].style.backgroundColor = "white";
    x = i * width;
    slider.style.transform = `translateX(-${x}px)`;
    console.log(`You are on image no ${i + 1}`);
  });
}
// making slide show for pictures
let interval = setInterval(rightside, 5000);
// Stop on entering mouse and resume on leaving mouse
frame.addEventListener("mouseover",()=>{
  clearInterval(interval);
});
frame.addEventListener("mouseout",()=>{
  interval = setInterval(rightside, 5000);
});
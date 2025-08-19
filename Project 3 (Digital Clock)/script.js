const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const second = document.getElementById('second');
const am = document.getElementById('am');

// making funnction for setting interval
function clock () {
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
// adding 0 if value is less then 10
if(h>12){
    h = h - 12;
    am.innerHTML = "pm";
}
if(h<10){h = "0"+h;}
if(m<10){m = "0"+m;}
if(s<10){s = '0'+s;}
// assigning value
hours.innerHTML = h;
minutes.innerHTML = m;
second.innerHTML = s;
};
// setting interval for updateing live 
setInterval(clock, 1000);
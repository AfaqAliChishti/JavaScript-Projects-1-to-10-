// assinging variable to accessing objects
const input = document.getElementById('input');
const button = document.querySelectorAll('button');

// appling forEach loop because button is a node list or array 
button.forEach(btn => {
    // appling addListener to button
    btn.addEventListener('click',() => {
        const value = btn.innerHTML;
        // appling condition for calculator
        if(value==="AC"){
            input.value = "";
        }
        else if(value==="Del"){
            input.value = input.value.slice(0,-1);
        }
        else if(value ==="="){
            input.value = eval(input.value);
        }
        else{
         input.value += value;   
        }
        // the below line is not important but its show your inputs on browser console
        console.log(`inner text is ${input.value}`);
    })
});

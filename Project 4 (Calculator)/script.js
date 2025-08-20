const input = document.getElementById('input');
const button = document.querySelectorAll('button');

button.forEach(btn => {
    btn.addEventListener('click',() => {
        const value = btn.innerHTML;
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
        console.log(`inner text is ${input.value}`);
    })
});
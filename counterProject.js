const increment = document.getElementById("incre");
const decrement = document.getElementById("decre");
const reset = document.getElementById("reset");
const value = document.getElementById("number");
var num=0;

increment.addEventListener("click", ()=>{
    num += 1;
    value.innerHTML = num;
});

decrement.addEventListener("click", ()=>{
    num -= 1;
    value.innerHTML = num;
});

reset.addEventListener("click", ()=>{
    num = 0;
    value.innerHTML = num;
})
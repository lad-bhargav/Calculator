let buttons  = document.querySelectorAll(".button");
let cleans = document.getElementsByClassName("cleans");
let start = document.getElementById("start");


let appendValue = (val)=>{
    start.innerText += val;
}

let allClear = ()=>{
    start.innerText = "";
}

let calculate = ()=>{
    try{
        start.innerText = eval(start.innerText);
    }
    catch(error){
        start.innerText = "syntax error";
    }
}
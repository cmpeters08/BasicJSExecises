// Implement here!
"use strict"

let allButtons = document.querySelector("#buttons");

allButtons.addEventListener("click", funFunction);

let screen = document.getElementById("screen");

let digits = [".","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let opperators = ["+","/","*","-"];
let memory = ["MR", "MC", "M+", "AC"];
let calculate = "=";
let nums = ""; //= 0;
//let formula = "";
let solution = "";
let savedNum = "";


function funFunction(event){
let pressedButton = event.target.innerText;

if(digits.includes(pressedButton)){
    //alert("the first if statement actually works!");
    nums += pressedButton;
    console.log("nums is " + nums)
    screen.innerText = nums;
}
else if(opperators.includes(pressedButton)){
    nums += pressedButton;
    screen.innerText = nums;
}
else if(pressedButton == calculate){
    //alert("you've selected the equal sign!");

    solution = eval(nums);
    console.log("the solution is ", solution);
    screen.innerText = solution;
   // nums = "";
}
else if(memory.includes(pressedButton)){
    if(pressedButton == "AC"){
    screen.innerText = "";
    nums = "";
    };
    if(pressedButton == "M+"){
        savedNum = eval(screen.innerText);
    }
    if(pressedButton == "MR"){
        nums = savedNum;
        screen.innerText = savedNum;
    }
    if(pressedButton == "MC"){
        savedNum == 0;
    }
}

};


// alert(formula);



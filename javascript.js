function add(...args) {
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum;
}
function subtract(...args) {
    let diff = args[0];
    for (let i = 1; i < args.length; i++) {
        diff -= args[i];
    }
    return diff;
}
function multiply(...args) {
    let prod = 1;
    for (let num of args) {
        prod *= num;
    }
    return prod;
}
function divide(...args) {
    let div = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] !== 0)
            div /= args[i];
        else
            return "Can't divide by zero";
    }
    return div;
}
let num1, num2, oper;

function operate(oper, num1, num2) {

    switch (oper) {
        case '+':
            add(num1, num2);
            break;

        case '-':
            subtract(num1, num2);
            break;

        case '*':
            multiply(num1, num2);
            break;

        case '/':
            divide(num1 / num2);
            break;
    }

}
let body = document.querySelector("body");
let header = document.createElement("h1");
header.textContent = "CALCULATOR";
body.appendChild(header);

let container = document.createElement("div");
container.id = "container";
body.appendChild(container);

let row  = document.createElement("div");
row.id = "row";
container.appendChild(row);


let zero = document.createElement("button");
zero.textContent = "0";
row.appendChild(zero);

let one = document.createElement("button");
one.textContent = "1";
row.appendChild(one);

let two = document.createElement("button");
two.textContent = "2";
row.appendChild(two);

let three = document.createElement("button");
three.textContent = "3";
row.appendChild(three);

let four = document.createElement("button");
four.textContent = "4";
row.appendChild(four);


let five = document.createElement("button");
five.textContent = "5";
row.appendChild(five);

let six = document.createElement("button");
six.textContent = "6";
row.appendChild(six);

let seven = document.createElement("button");
seven.textContent = "7";
row.appendChild(seven);

let eight = document.createElement("button");
eight.textContent = "8";
row.appendChild(eight);

let nine = document.createElement("button");
nine.textContent = "9";
row.appendChild(nine);

let addition = document.createElement("button");
addition.textContent = "+";
row.appendChild(addition);

let subtraction = document.createElement("button");
subtraction.textContent = "-";
row.appendChild(subtraction);

let multiplication = document.createElement("button");
multiplication.textContent = "*";
row.appendChild(multiplication);

let division = document.createElement("button");
division.textContent = "/";
row.appendChild(division);

let clear = document.createElement("button");
clear.textContent = "AC";
row.appendChild(clear);

let display = document.createElement("div");
display.id = "display";
row.appendChild(display);


let equals = document.createElement("button");
equals.textContent = "Calculate";
row.appendChild(equals);
equals.id = "calculate";

let choices = document.querySelectorAll("button");
choices.forEach(choice => {
     choice.addEventListener('click', event => {
          if(event.target.textContent !== 'AC' && event.target.textContent !== 'Calculate')
               display.textContent += event.target.textContent;
     });
});
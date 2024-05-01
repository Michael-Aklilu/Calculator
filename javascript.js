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
let container = document.createElement("div");
container.id = "container";
body.appendChild(container);

let firstRow  = document.createElement("div");
firstRow.id = "firstRow";
container.appendChild(firstRow);

let secondRow = document.createElement("div");
secondRow.id = "secondRow";
container.appendChild(secondRow);

let thirdRow = document.createElement("div");
thirdRow.id = "thirdRow";
container.appendChild(thirdRow);

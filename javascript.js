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

let num1,num2,oper;
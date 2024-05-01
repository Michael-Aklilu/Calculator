function add(...args){
    let sum = 0;
    for(let num of args){
       sum+=num;
    }
       return sum;
}
function subtract(...args){
    let diff = args[0];
    for(let i = 1;i<length.args;i++){
       diff -= args[i];
    }
       return diff;
}


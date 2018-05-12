export function sum(a,b){
    return a+b;
}

export let PI = 3.14;

//or

function sum(a,b){
    return a+b;
}
let PI = 3.14;

export{sum,PI};
//incase you want to rename one ,module on export
export{sum as add,PI};
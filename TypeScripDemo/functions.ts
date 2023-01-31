
//named functions
function test(numOne: number, numTwo: number): number {
    return numOne + numTwo;
}

console.log(test(1, 2))

// arrow function
let substractFun = (numOne: number, numTwo: number):number => numOne - numTwo;

// variable function
let multiplyFun = function(numOne: number, numTwo: number):number {return numOne * numTwo}

console.log(substractFun(3, 2));
console.log(multiplyFun(3, 4));


//optional parameters

const sumThree = (num1:number, num2:number, num3?:number):number=>{ return num3? num1+num2+num3 : num1 + num2; }
console.log("without using optional parameter", sumThree(1, 5));
console.log("with using optional parameter", sumThree(1, 5, 7));

//rest pameter


const mapReduce = (num1: number, num2:number, ...num3:number[]):number=>{
    return num1+num2+num3.reduce(((a, b)=> a + b), 0);
}
console.log("using map reduce with rest function", mapReduce(1, 2, ...[3, 4, 5]));


//default parameters 

const defualtParams = (num1: number, num2=10) => num1 + num2;
console.log("defualt parameters ", defualtParams(1));
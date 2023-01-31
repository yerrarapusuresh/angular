// ARRAYS

let numbers : Array<number>;
numbers = [1, 2, 3, 4, 5, 6, 7];


let result = numbers.filter(n=> n%2 == 0);
console.log(result);



let employes : string[];
employes = ['suresh', 'mintu'];
console.log(employes);


//ENUMS

enum Directions {
    UP = 1, 
    DOWN, 
    LEFT, 
    RIGHT
}

console.log("the number of right is "+Directions.RIGHT);


//ANY

let testVariable : any = 10;
console.log(testVariable);
testVariable  = 'suresh';
console.log(testVariable);
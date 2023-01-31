// ARRAYS
var numbers;
numbers = [1, 2, 3, 4, 5, 6, 7];
var result = numbers.filter(function (n) { return n % 2 == 0; });
console.log(result);
var employes;
employes = ['suresh', 'mintu'];
console.log(employes);
//ENUMS
var Directions;
(function (Directions) {
    Directions[Directions["UP"] = 1] = "UP";
    Directions[Directions["DOWN"] = 2] = "DOWN";
    Directions[Directions["LEFT"] = 3] = "LEFT";
    Directions[Directions["RIGHT"] = 4] = "RIGHT";
})(Directions || (Directions = {}));
console.log("the number of right is " + Directions.RIGHT);
//ANY
var testVariable = 10;
console.log(testVariable);
testVariable = 'suresh';
console.log(testVariable);

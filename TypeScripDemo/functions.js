var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//named functions
function test(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(test(1, 2));
// arrow function
var substractFun = function (numOne, numTwo) { return numOne - numTwo; };
// variable function
var multiplyFun = function (numOne, numTwo) { return numOne * numTwo; };
console.log(substractFun(3, 2));
console.log(multiplyFun(3, 4));
//optional parameters
var sumThree = function (num1, num2, num3) { return num3 ? num1 + num2 + num3 : num1 + num2; };
console.log("without using optional parameter", sumThree(1, 5));
console.log("with using optional parameter", sumThree(1, 5, 7));
//rest pameter
var mapReduce = function (num1, num2) {
    var num3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num3[_i - 2] = arguments[_i];
    }
    return num1 + num2 + num3.reduce((function (a, b) { return a + b; }), 0);
};
console.log("using map reduce with rest function", mapReduce.apply(void 0, __spreadArray([1, 2], [3, 4, 5], false)));
//default parameters 
var defualtParams = function (num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
};
console.log("defualt parameters ", defualtParams(1));

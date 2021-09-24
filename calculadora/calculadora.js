const sumar = require("./sumar");
const restar = require("./restar");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");

let num1 = 10
let num2 = 5

console.log(sumar(num1,num2));
console.log(restar(num1,num2));
console.log(multiplicar(num1,num2));
console.log(dividir(num1,num2));
num2=0
console.log(dividir(num1,num2));
var x = 12;
var y = 13;
var z = 14;
var w = 15;
var h = 16;

console.log(x + y + z + w + h);

console.log(x + y + z - (w + h));

var num = 10;
var num2 = 20;

console.log(num + num2);
console.log(num - num2);
console.log(num / num2);
console.log(num * num2);
console.log(num % num2);
console.log(num2 % num);

var math = 123.223;
var abs = Math.abs(math);
console.log("Absolute Number : " , abs);

var ceil = Math.ceil(math);
console.log("Ceil Number : " , ceil);

var round = Math.round(math);
console.log("Round Number : " , round);

var floor = Math.floor(math);
console.log("Floor Number : " , floor);

var random = Math.floor(Math.random() * 11);
console.log("Random Number : " + random);
console.log("Random Number : ", random);









var onionPrice = 43;
var eggPrice = 10;
var eggQuantity = 7;
var totalPrice = onionPrice + eggPrice;
var priceDifference = onionPrice - eggPrice;
var eggPriceMultiplication = eggPrice * eggQuantity;

// console.log(onionPrice);
// console.log(eggPrice);
// console.log(onionPrice + eggPrice);
// console.log(totalPrice);
// console.log(priceDifference);
// console.log(eggPriceMultiplication);

var moneyAvailable = 100;
var orangePrice = 5;
var orangeQuantity = moneyAvailable / orangePrice;
// console.log(orangeQuantity);

// special edition
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
total = total.toFixed(1);
total = parseFloat(total);
// console.log(total);

// modulus
var mangoes = 57;
var hungryPerson = 12;
var dividing = mangoes / hungryPerson;
console.log(dividing);
var remaining = mangoes % hungryPerson;
console.log(remaining);
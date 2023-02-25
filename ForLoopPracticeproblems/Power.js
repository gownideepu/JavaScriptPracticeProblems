const prompt = require('prompt-sync')();

let number = Number(prompt("Enter a number : "));

for (let index = 0; index <= number; index++) {
    console.log(`${Math.pow(2, index)}`);
}
const prompt = require("prompt-sync")({ sigint: true });
const TWO = 2;
let number = prompt("Enter limit");
let i = 1;
while (i < number) {
    console.log(Math.pow(TWO, i));
    i++;
}
const prompt = require("prompt-sync")({ sigint: true });
const TWO =2;
let number = prompt("Enter limit");
for (let i = 1; i <= number; i++) {
    console.log(Math.pow(TWO, i));
}
const prompt = require("prompt-sync")({ sigint: true });
let from = parseInt(prompt("Enter from number"));
let upto = parseInt(prompt("Enter upto number"));
let flag = 0;
for (let i = from + 1; i < upto; i++) {
    flag = 0;
    if (i === 2) flag = 1;
    if (i > 2) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = 1;
                break;
            }
        }
    }
    if (flag === 0) {
        console.log(i)
    }
}
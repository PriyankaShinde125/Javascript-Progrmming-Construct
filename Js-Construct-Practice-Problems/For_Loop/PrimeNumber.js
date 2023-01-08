let number = prompt("Enter number to check prime or not");
let flag = 0;
if (number === 2) flag = 1;
for (let j = 2; j < number; j++) {
    if (number % j == 0) {
        flag = 1;
        break;
    }
}
if (flag == 0)
    console.log("The number is prime");
else
    console.log("The number is not prime");
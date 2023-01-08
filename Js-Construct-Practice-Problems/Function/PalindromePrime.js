function isPalindrome(number) {
    var remainder, temp, reversedNumber = 0;
    temp = number;

    while (number > 0) {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber * 10 + remainder;
    }

    if (reversedNumber == temp) {
        return true;
    }
    else {
        return false;
    }
}

function isPrime(number) {
    let flag = 0;
    if (number === 2) flag = 1;
    for (let j = 2; j < number; j++) {
        if (number % j == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0)
        return true;
    else return false;
}

let number = prompt("Enter number");
if (isPrime(number)) {
    if (isPalindrome(number)) {
        console.log(number + " is prime and palindrome also");
    }
    else {
        console.log(number + " is prime but not palindrome ");
    }
} else console.log(number + " is not prime ");
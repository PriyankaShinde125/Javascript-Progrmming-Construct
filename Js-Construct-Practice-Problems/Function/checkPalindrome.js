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

let number = prompt("Enter number");
console.log(isPalindrome(number) ? "It is palindrome" : "It is not palindrome");
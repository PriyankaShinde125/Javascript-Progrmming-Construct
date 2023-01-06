//Minimum and maximum among 5 random 3 digit values
let num1 = Math.floor(Math.random() * 900 + 100);
let num2 = Math.floor(Math.random() * 900 + 100);
let num3 = Math.floor(Math.random() * 900 + 100);
let num4 = Math.floor(Math.random() * 900 + 100);
let num5 = Math.floor(Math.random() * 900 + 100);
let largest = num1;
let smallest = num1;
if(num1 > largest)
largest=num1;
if(num1 < smallest)
smallest=num1;

if(num2 > largest)
largest=num2;
if(num2 < smallest)
smallest=num2;

if(num3 > largest)
largest=num3;
if(num3 < smallest)
smallest=num3;

if(num4 > largest)
largest=num4;
if(num4 < smallest)
smallest=num4;

if(num5 > largest)
largest=num5;
if(num5 < smallest)
smallest=num5;

console.log("Largest among " + num1 + " , " + num2 + " , " + num3 + " is " + largest);
console.log("Smallest among " + num1 + " , " + num2 + " , " + num3 + " is " + smallest);

let year=2020;
let isLeap = false;
let digitCount =  Math.floor(Math.log10(year) + 1);
isLeap = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
if (digitCount == 4) {
    console.log(isLeap ? year + " is leap year" : year + " is not leap year");
} else
   console.log("Invalid year");
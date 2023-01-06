//generate two digit random number
let a = Math.floor(Math.random() * 90 + 10);
console.log("generated number = " + a);

//Unit conversion
let oneFit = 12;
let answer = 42 / oneFit;

console.log("42 ft = " + answer + " inches");

/*Rectangular Plot of 60 feet x 40 feet in meters
1 sqft = 0.092903 sqmt*/
let length = 60
let width = 40
let area = length * width
let areainmeter = area * 0.092903;
console.log("area in meter square = " + areainmeter);

//Calculate area of 25 such plots in a
// 1 sqmt = 0.000247 acre
let areainacres = areainmeter * 0.000247;
let totalarea = areainacres * 25;
console.log("Area of 25 plots = " + totalarea);
const prompt = require("prompt-sync")({ sigint: true });
let choice = prompt("Select an option \n1 : Feet to Inch \n2 : Feet to Meter \n3 : Inch to Feet \n4 : Meter to Feet\n");
let input = prompt("Enter value to convert");
switch (choice) {
    case "1":
        let inch = input * 12;
        console.log(+input + " Feet = " + inch + " Inch");
        break;
    case "2":
        let meter = input * 0.3048;
        console.log(+input + " Feet = " + meter + " Meter");
        break;
    case "3":
        let feet = input / 12;
        console.log(+input + " Inch = " + feet + " Feet");
        break;
    case "4":
        let feetMeter = input * 3.28084;
        console.log(+input + " Meter = " + feetMeter + " Feet");
        break;
    default:
        console.log("Invalid input for the conversion");
}
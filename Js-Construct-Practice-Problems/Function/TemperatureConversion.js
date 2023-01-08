let conversionType = prompt("Press 1 for celcius to fahrenheit conversion \nPress 2 for fahrenheit to celcius conversion");
let temp = prompt("Enter temprature");

let convertedTemp = temperatureConversion(temp, conversionType);

function temperatureConversion(temp, conversionType) {
    if (conversionType == 1)
        return ((temp * 9) / 5) + 32;
    else
        return ((temp - 32) * 5) / 9;
}

console.log("Converted temperature is = " + convertedTemp);
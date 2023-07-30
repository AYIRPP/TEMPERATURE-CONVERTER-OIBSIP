// script.js

function convertToCelsius() {
    var celsiusInput = document.getElementById("celsiusInput").value;
    var fahrenheitOutput = document.getElementById("fahrenheitOutput");

    if (celsiusInput === "") {
        fahrenheitOutput.textContent = "Please enter a valid temperature.";
    } else {
        var celsius = parseFloat(celsiusInput);
        var fahrenheit = (celsius * 9/5) + 32;
        fahrenheitOutput.textContent = "Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
    }
}

function convertToFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheitInput").value;
    var celsiusOutput = document.getElementById("celsiusOutput");

    if (fahrenheitInput === "") {
        celsiusOutput.textContent = "Please enter a valid temperature.";
    } else {
        var fahrenheit = parseFloat(fahrenheitInput);
        var celsius = (fahrenheit - 32) * 5/9;
        celsiusOutput.textContent = "Temperature in Celsius: " + celsius.toFixed(2) + " °C";
    }
}

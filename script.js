function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById('result');

    // Validate that input is a number
    if (isNaN(temperatureInput)) {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    if (unit === "Celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (unit === "Fahrenheit") {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = "Celsius";
    } else if (unit === "Kelvin") {
        convertedTemperature = temperature - 273.15;
        convertedUnit = "Celsius";
    }

    resultDiv.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)}° ${convertedUnit}`;
}

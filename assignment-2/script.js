// Select the necessary DOM elements
const number1 = document.getElementById('number1'); 
const number2 = document.getElementById('number2'); 
const calculateButton = document.getElementById('calculateButton'); 
const answer = document.getElementById('answer'); 

calculateButton.addEventListener('click', calculate);

function calculate() {
    // Get the values from the input fields and store them in variables (convert to numbers)
    const value1 = parseFloat(number1.value); // Retrieve and convert value from number1
    const value2 = parseFloat(number2.value); // Retrieve and convert value from number2

    // Check if both inputs are valid numbers
    if (isNaN(value1) || isNaN(value2)) {
        answer.textContent = 'Please enter valid numbers.';
        return;
    }

    // Perform the addition
    const result = value1 + value2;

    // Display the result in the answer span
    answer.textContent = result;
}
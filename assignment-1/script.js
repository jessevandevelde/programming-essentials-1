// Select the necessary DOM elements
const heading = document.getElementById('mainHeading');
const textInput = document.getElementById('textInput');
const changeTextButton = document.getElementById('changeTextButton');

// Add an event listener to the button
changeTextButton.addEventListener('click', changeHeadingText);
// the first argument is the event type
// the second argument is a callback function that will be called when the event is triggered


// Function to change the heading text
function changeHeadingText() {
    // Get the value from the input field and store it in a variable
    const newText = textInput.value;

    // Change the text content of the heading
    heading.textContent = newText;
}
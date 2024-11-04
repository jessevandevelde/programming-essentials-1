// Sla de buttons in variabelen op.
const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');

// sla de tekst op in een variabele.
const text1 = document.querySelector('.text-elements');
console.log(text1);
redButton.onclick = () => {ChangeColor(text1, 'red')};
greenButton.onclick = () => {ChangeColor(text1, 'green')};
blueButton.onclick = () => {ChangeColor(text1, 'blue')};
// greenButton.onclick = () => { ? };
// blueButton.onclick = () => { ? };

// Dit is een functie om de kleur te veranderen
// De functie accepteert twee argumenten: element en color
// element is het DOM-element dat je wilt veranderen
// color is de kleur die je wilt toepassen
function ChangeColor(element, color) {
    element.style.color = color;
}
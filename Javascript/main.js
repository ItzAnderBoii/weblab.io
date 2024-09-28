
const texts = [
    "Join the conversation and let’s make memories together! ✨",
    "Welcome,",
    "Let's create a community!",
];

let index = 0;

function changeText() {
    const textElement = document.getElementById('randomText');
    textElement.innerText = texts[index];
    index = (index + 1) % texts.length; // Cycle through the array
}

setInterval(changeText, 5000); // Change text every second

function warning() {
    alert("You can't access this yet.")
}
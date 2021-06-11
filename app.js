
const passwordDisplay = document.getElementById("passwordDisplay");

const numlength = document.getElementById("inputfield");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const button = document.getElementById("btn");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*~";


function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {

    const len = numlength.value;

    let password = ' ';

    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }

    passwordDisplay.innerHTML = password;
}


function generateX() {

    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase())
    }

    if (lowerEl.checked) {
        xs.push(getLowercase())
    }

    if (numberEl.checked) {
        xs.push(getNumber())
    }

    if (symbolEl.checked) {
        xs.push(getSymbol())
    }

    return xs[Math.floor(Math.random() * xs.length)]
}


button.addEventListener('click', () => {

    generatePassword();
})
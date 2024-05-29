
let currentInput = '';
let display = document.getElementById('display');

document.querySelectorAll('.calc-btn').forEach(button => {
    button.addEventListener('click', () => {
        let value = button.getAttribute('data-value');
        if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
        } else if (value === 'C') {
            currentInput = '';
        } else {
            currentInput += value;
        }
        display.value = currentInput;
    });
});

// Text tools functionality
document.getElementById('uppercase').addEventListener('click', () => {
    let text = document.getElementById('text-input-basic').value;
    document.getElementById('text-input-basic').value = text.toUpperCase();
});

document.getElementById('lowercase').addEventListener('click', () => {
    let text = document.getElementById('text-input-basic').value;
    document.getElementById('text-input-basic').value = text.toLowerCase();
});

document.getElementById('remove-spaces').addEventListener('click', () => {
    let text = document.getElementById('text-input-remove').value;
    document.getElementById('text-input-remove').value = text.replace(/\s/g, '');
});

document.getElementById('remove-lines').addEventListener('click', () => {
    let text = document.getElementById('text-input-remove').value;
    document.getElementById('text-input-remove').value = text.replace(/\n/g, '');
});

// Image tools functionality
document.getElementById('image-input').addEventListener('change', (event) => {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('image-preview').innerHTML = `<img src="${e.target.result}" alt="Image Preview">`;
        };
        reader.readAsDataURL(file);
    }
});

// Unit converter functionality
const conversionRates = {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    milliliters: 1000,
    liters: 1,
    grams: 1000,
    kilograms: 1,
    milligrams: 1000000,
};

document.getElementById('convert').addEventListener('click', () => {
    let value = parseFloat(document.getElementById('unit-input').value);
    let fromUnit = document.getElementById('unit-from').value;
    let toUnit = document.getElementById('unit-to').value;

    let result = (value * conversionRates[fromUnit]) / conversionRates[toUnit];

    document.getElementById('conversion-result').innerText = result;
});

// Color tools functionality
document.getElementById('color-picker').addEventListener('input', (event) => {
    let color = event.target.value;
    document.getElementById('color-preview').style.backgroundColor = color;
});

// Randomizers functionality
document.getElementById('random-number').addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('random-number-result').innerText = randomNumber;
});

document.getElementById('flip-coin').addEventListener('click', () => {
    let result = Math.random() < 0.5 ? "Heads" : "Tails";
    document.getElementById('flip-coin-result').innerText = result;
});

document.getElementById('spin-bottle').addEventListener('click', () => {
    let directions = ["North", "East", "South", "West"];
    let result = directions[Math.floor(Math.random() * directions.length)];
    document.getElementById('spin-bottle-result').innerText = result;
});

document.getElementById('lucky-wheel').addEventListener('click', () => {
    let prizes = ["1", "2", "3", "4", "5"];
    let result = prizes[Math.floor(Math.random() * prizes.length)];
    document.getElementById('lucky-wheel-result').innerText = result;
});

document.getElementById('rock-paper-scissors').addEventListener('click', () => {
    let choices = ["batu", "kertas", "gunting"];
    let result = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('rock-paper-scissors-result').innerText = result;
});

// Generator pass 
document.getElementById('generate-password').addEventListener('click', () => {
    let chars = "jackjackcihearyoulike'emyoungmangapefeksiibibarusuh1234567890";
    let password = "";
    for (let i = 0; i < 8; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('generated-password').innerText = password;
});

// General tools 
document.getElementById('date-time').addEventListener('click', () => {
    let now = new Date();
    document.getElementById('date-time-result').innerText = now.toString();
});

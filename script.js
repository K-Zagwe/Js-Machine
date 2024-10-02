document.addEventListener('DOMContentLoaded', () => {
    // BMI Calculator
    const bmiCalculator = document.getElementById('bmi-calculator');
    const bmiResult = document.getElementById('bmi-result');

    bmiCalculator.querySelector('button').addEventListener('click', () => {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        
        if (height && weight) {
            const bmi = weight / (height * height);
            bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}`;
        } else {
            bmiResult.textContent = 'Please enter both height and weight.';
        }
    });

    // Circumference Calculator
    const circumferenceCalculator = document.getElementById('circumference-calculator');
    const circumferenceResult = document.getElementById('circumference-result');

    circumferenceCalculator.querySelector('button').addEventListener('click', () => {
        const radius = parseFloat(document.getElementById('radius').value);
        
        if (radius) {
            const circumference = 2 * Math.PI * radius;
            circumferenceResult.textContent = `The circumference is ${circumference.toFixed(2)} meters`;
        } else {
            circumferenceResult.textContent = 'Please enter a radius.';
        }
    });

    // Number Counter
    const counterDisplay = document.getElementById('counter-display');
    let count = 0;
    let intervalId = null;

    document.getElementById('decrease').addEventListener('click', () => {
        count--;
        updateCounter();
    });

    document.getElementById('reset').addEventListener('click', () => {
        count = 0;
        updateCounter();
        clearInterval(intervalId);
    });

    document.getElementById('start').addEventListener('click', () => {
        if (!intervalId) {
            intervalId = setInterval(() => {
                count++;
                updateCounter();
            }, 1000);
        }
    });

    document.getElementById('increase').addEventListener('click', () => {
        count++;
        updateCounter();
    });

    function updateCounter() {
        counterDisplay.textContent = count;
    }

    // Dice Roller
    const rollDiceButton = document.getElementById('roll-dice');
    const diceResults = document.querySelectorAll('.dice-results div');

    rollDiceButton.addEventListener('click', () => {
        diceResults.forEach(dice => {
            dice.textContent = Math.floor(Math.random() * 6) + 1;
        });
    });

    // Tax Calculator
    const taxCalculator = document.getElementById('tax-calculator');
    const taxResult = document.getElementById('tax-result');

    taxCalculator.querySelector('button').addEventListener('click', () => {
        const items = [
            parseFloat(document.getElementById('item1').value) || 0,
            parseFloat(document.getElementById('item2').value) || 0,
            parseFloat(document.getElementById('item3').value) || 0,
            parseFloat(document.getElementById('item4').value) || 0
        ];
        const taxRate = parseFloat(document.getElementById('tax-rate').value) || 0;
        
        const subtotal = items.reduce((sum, item) => sum + item, 0);
        const tax = subtotal * (taxRate / 100);
        const total = subtotal + tax;
        
        taxResult.textContent = `Total: $${total.toFixed(2)} (Subtotal: $${subtotal.toFixed(2)}, Tax: $${tax.toFixed(2)})`;
    });

    // Simple Calculator
    const calcDisplay = document.getElementById('calc-display');
    const calcButtons = document.querySelector('.calc-buttons');

    const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];
    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn;
        button.addEventListener('click', () => handleCalcButton(btn));
        calcButtons.appendChild(button);
    });

    function handleCalcButton(value) {
        if (value === '=') {
            try {
                calcDisplay.value = eval(calcDisplay.value);
            } catch (error) {
                calcDisplay.value = 'Error';
            }
        } else if (value === 'C') {
            calcDisplay.value = '';
        } else {
            calcDisplay.value += value;
        }
    }

    // Factorial Calculator
    const factorialCalculator = document.getElementById('factorial-calculator');
    const factorialResult = document.getElementById('factorial-result');

    factorialCalculator.querySelector('button').addEventListener('click', () => {
        const num = parseInt(document.getElementById('factorial-input').value);
        if (num >= 0 && num <= 100) {
            let result = 1;
            for (let i = 2; i <= num; i++) {
                result *= i;
            }
            factorialResult.textContent = `Factorial of ${num} is ${result}`;
        } else {
            factorialResult.textContent = 'Please enter a number between 0 and 100.';
        }
    });

    // Length Converter
    const lengthConverter = document.getElementById('length-converter');
    const conversionResult = document.getElementById('conversion-result');

    lengthConverter.querySelector('button').addEventListener('click', () => {
        const fromUnit = document.getElementById('from-unit').value;
        const toUnit = document.getElementById('to-unit').value;
        const value = parseFloat(document.getElementById('convert-input').value);

        if (value) {
            const result = convertLength(value, fromUnit, toUnit);
            conversionResult.textContent = `${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
        } else {
            conversionResult.textContent = 'Please enter a valid number.';
        }
    });

    function convertLength(value, fromUnit, toUnit) {
        const conversions = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            in: 0.0254
        };
        return value * conversions[fromUnit] / conversions[toUnit];
    }

    // Grade Calculator
    const gradeCalculator = document.getElementById('grade-calculator');
    const gradeResult = document.getElementById('grade-result');

    gradeCalculator.querySelector('button').addEventListener('click', () => {
        const marks = parseInt(document.getElementById('marks').value);
        let grade;

        if (marks >= 90) grade = 'A';
        else if (marks >= 80) grade = 'B';
        else if (marks >= 70) grade = 'C';
        else if (marks >= 60) grade = 'D';
        else grade = 'F';

        gradeResult.textContent = `Your grade is: ${grade}`;
    });

    // Binary Converter
    const binaryConverter = document.getElementById('binary-converter');
    const binaryResult = document.getElementById('binary-result');

    binaryConverter.querySelector('button').addEventListener('click', () => {
        const decimal = parseInt(document.getElementById('decimal-input').value);
        if (!isNaN(decimal) && decimal >= 0) {
            binaryResult.textContent = `Binary: ${decimal.toString(2)}`;
        } else {
            binaryResult.textContent = 'Please enter a valid non-negative number.';
        }
    });
});
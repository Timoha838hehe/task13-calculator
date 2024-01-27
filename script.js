function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case '+':
            result = (number1 + number2).toFixed(10); // Округлення до 10 знаків після коми
            break;
        case '-':
            result = (number1 - number2).toFixed(10);
            break;
        case '*':
            result = (number1 * number2).toFixed(10);
            break;
        case '/':
            result = number2 !== 0 ? (number1 / number2).toFixed(10) : 'Недопустима операція';
            break;
        default:
            result = 'Оберіть операцію';
    }

    document.getElementById('result').innerText = `Результат: ${result}`;
}


    document.getElementById('result').innerText = `Результат: ${result}`;


function reset() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('operation').value = '+';
    document.getElementById('result').innerText = 'Результат: ';
}

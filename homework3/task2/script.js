const firstNumber = Number(prompt("Введите первое число:"));
const secondNumber = Number(prompt("Введите второе число:"));
const action = prompt("Какое действие вы хотите произвести: +, -, /, * ?");
let result;

switch (action) {
    case "+":
        result = firstNumber + secondNumber;
        alert(`Результат сложения: ${result}`);
        break;

    case "-":
        result = firstNumber - secondNumber;
        alert(`Результат вычитания: ${result}`);
        break; 

    case "/":
        result = firstNumber / secondNumber;
        alert(`Результат деления: ${result}`);
        break; 

    default:
        result = firstNumber * secondNumber;
        alert(`Результат умножения: ${result}`);
        break;
}

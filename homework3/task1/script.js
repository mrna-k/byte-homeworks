const firstNumber = Number(prompt("Enter the first number"));
const secondNumber = Number(prompt("Enter the second number"));

if (firstNumber > secondNumber) {
    alert(`Number ${firstNumber} more then ${secondNumber}`);
} else if (firstNumber < secondNumber) {
    alert(`Number ${firstNumber} less then ${secondNumber}`);
} else {
    alert(`Numbers are equal`);
}
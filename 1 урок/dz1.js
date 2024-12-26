// 1. Проверка на четность
let number = prompt("Введите число:");
number = parseInt(number); // Преобразуем строку в число

if (number % 2 === 0) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}

// 2. Проверка на положительное, отрицательное или ноль
let number2 = prompt("Введите число:");
number2 = parseInt(number2); // Преобразуем строку в число

if (number2 > 0) {
  console.log("Положительное число");
} else if (number2 < 0) {
  console.log("Отрицательное число");
} else {
  console.log("Число равно нулю");
}
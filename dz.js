for (let i=1; i <=10; i++) {
  console.log("Пример 1:", i);
}

for (let i = 10; i >= 1; i--) {
  console.log("Пример 2:", i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log("Пример 3:", i);
}

const fruits = ["Яблоко", "Банан", "Апельсин", "Груша"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Пример 4:", fruits[i]);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Пример 5: Сумма чисел от 1 до 100 =", sum);

const word = "JavaScript";
for (let i = 0; i < word.length; i++) {
  console.log("Пример 6:", word[i]);
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  squaredNumbers.push(numbers[i] ** 2);
}
console.log("Пример 7: Квадраты чисел", squaredNumbers);

const values = [12, 45, 78, 23, 89, 90, 34];
let max = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
      max = values[i];
  }
}
console.log("Пример 8: Максимальное число =", max);

for (let i = 1; i <= 10; i++) {
  console.log(`Пример 9: 5 * ${i} = ${5 * i}`);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
      continue;
  }
  console.log("Пример 10: Нечетное число =", i);
}

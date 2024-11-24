class StringBuilder {
  // Конструктор приймає параметр initialValue, який ініціалізує приватну властивість value
  constructor(initialValue) {
    this.value = initialValue; // Приватна властивість value
  }

  // Метод для отримання поточного значення value
  getValue() {
    return this.value; // Повертає поточне значення приватної властивості value
  }

  // Метод для додавання рядка на початок значення value
  padStart(str) {
    this.value = str + this.value; // Додає str на початок value
  }

  // Метод для додавання рядка в кінець значення value
  padEnd(str) {
    this.value = this.value + str; // Додає str в кінець value
  }

  // Метод для додавання рядка на початок і в кінець значення value
  padBoth(str) {
    this.value = str + this.value + str; // Додає str на початок і в кінець value
  }
}

// Перевірка коректності роботи класу
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

class StringBuilder {
  #value; // Приватна властивість, недоступна за межами класу

  constructor(initialValue) {
    this.#value = initialValue; // Ініціалізація значення через конструктор
  }

  // Публічний метод для отримання значення приватної властивості
  getValue() {
    return this.#value;
  }

  // Додає рядок у кінець значення приватної властивості
  padEnd(str) {
    this.#value += str;
  }

  // Додає рядок на початок значення приватної властивості
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Додає рядок і на початок, і в кінець значення приватної властивості
  padBoth(str) {
    this.padStart(str); // Використання методу padStart
    this.padEnd(str);   // Використання методу padEnd
  }
}

// Код для перевірки
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

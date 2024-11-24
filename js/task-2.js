class Storage {
  // Конструктор приймає масив початкових товарів
  constructor(initialItems) {
    this.items = initialItems; // Приватна властивість items
  }

  // Метод для отримання поточного списку товарів
  getItems() {
    return this.items; // Повертає масив поточних товарів
  }

  // Метод для додавання нового товару
  addItem(newItem) {
    this.items.push(newItem); // Додає новий товар до масиву
  }

  // Метод для видалення товару
  removeItem(itemToRemove) {
    this.items = this.items.filter(item => item !== itemToRemove); // Видаляє товар з масиву
  }
}

// Перевірка коректності роботи класу
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

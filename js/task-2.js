console.log("\n");
console.log("Задача 2. Cклад ");

// 1) Створи клас Storage, який створюватиме об'єкти для управління складом товарів.
// 2) Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// 3) Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.



class Storage {
  #items; // початковий масив товарів, записується до створеного об'єкта в приватну!!! властивість items.

  // можна взагалі прибрати рядок items та скрізь прибрати # але тоді це буде публічна властивість, а не приватна. 

  constructor(items) {
    this.#items = items;
  } // Метод конструктор - ініціювання об'єкту, де властивість item  встановлюється параметром item
  // Ініціювання об'єкту - це процес встановлення початкових значень для властивостей об'єкта.

  getItems() {
    return this.#items;
  }

  addItem(addItem) {
    this.#items.push(addItem);
  }

  removeItem(removeItem) {
    this.#items = this.#items.filter(item => item !== removeItem);
    // filter відфільтровує весь масив на предмет "потрібні всі, які не дорівнюють тому яке потрыбно забрати.
  }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
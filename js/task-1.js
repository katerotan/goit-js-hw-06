console.log("Задача 1. Акаунт користувача");

// 1) Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// ----------------------------------------------
//БРИФ (для себе):
// Сервіс доставки їжі
// Управління акаунтами користувачів
// Пропали this під час звернення до властивостей об'єкта

// ----------------------------------------------

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  };

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// cost і order - передають аргументи. Це не ключі об'єкту, тому там this не потрібно

// якби тут був get чи set - то можна було б зробити додаткову дію за допомогою циклів наприклад if else, тобто зробити перевірку, наприклад якщо йде зміна пароля і тоді потрібно перевірити чи він валідний і лише потім змінитии пароль, тоді через set
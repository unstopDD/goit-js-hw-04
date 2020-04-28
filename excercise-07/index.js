'use strict';

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
let idTrans = 0;
const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    idTrans += 1;
    const transaction = {
      idTransaction: idTrans,
      amountTransactions: amount,
      typeTransactions: type,
    };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const addHistory = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(addHistory);
    return `Операция прошла успешно, ${amount} зачисленно на ваш счёт`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      const addHistory = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(addHistory);
    } else {
      return `Невозможно выполнить транзакцию, недостаточно средств`;
    }

    return `Операция прошла успешно, ${amount} снято с Вашего счета`;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Текущий счет ${this.balance} `;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    // eslint-disable-next-line
    for (const transaction of this.transactions) {
      if (transaction.idTransaction === id) {
        return transaction;
      }
    }
    return 'ID не обнаружен';
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;

    // eslint-disable-next-line
    for (const transaction of this.transactions) {
      if (transaction.typeTransactions === type) {
        total += transaction.amountTransactions;
      }
    }
    return total;
  },
};

console.log(account.deposit(500));
console.log(account.deposit(1500));
console.log(account.deposit(1500));
console.log(account.withdraw(1111));
console.log(account.withdraw(21111));
console.log(account.withdraw(333));
console.log(account);
console.log(account.getBalance());
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.transactions);

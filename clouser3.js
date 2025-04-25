function createBankAccount(balance) {
  let accountBalance = balance;

  return {
    deposit: function (amount) {
      accountBalance += amount;

      return `credited ${accountBalance} amount into your account.`;
    },
    withdraw: function (amount) {
      accountBalance -= amount;

      return `debited ${accountBalance} amount from your account.`;
    },
    getBalance: function () {
      return `Your account balabce is ${accountBalance}.`;
    },
  };
}

let bankProcess = createBankAccount(100);

console.log(bankProcess.deposit(50));

console.log(bankProcess.withdraw(30));

console.log(bankProcess.getBalance());

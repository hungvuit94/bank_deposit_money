class Bank {
  constructor() {
    this.users = {
      'user1': { balance: 0 },
      'user2': { balance: 0 },
      'user3': { balance: 0 }
    }; // Assuming users are stored in an object with userId as key
  }

  depositMoney(userId, amount) {
    if (amount <= 0) {
      return false;
    }

    const user = this.users[userId];
    if (!user) {
      return false;
    }

    user.balance += amount;
    return true;
  }
}
module.exports = Bank;
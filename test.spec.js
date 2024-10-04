const Bank = require('./Bank'); // Assuming Bank class is exported from Bank.js

describe('Bank', () => {
  let bank;

  beforeEach(() => {
    bank = new Bank();
  });

  it('returns false when deposit amount is less than or equal to 0', () => {
    expect(bank.depositMoney('user1', 0)).toBe(false);
    expect(bank.depositMoney('user1', -1)).toBe(false);
  });

  it('returns false when user does not exist', () => {
    expect(bank.depositMoney('nonexistentUser', 100)).toBe(false);
  });

  it('updates user balance and returns true when deposit is successful', () => {
    bank.users['user1'] = { balance: 0 };
    expect(bank.depositMoney('user1', 100)).toBe(true);
    expect(bank.users['user1'].balance).toBe(100);
  });
});
const balanceEl = document.querySelector("#balance");
const depositInput = document.querySelector("#deposit-amount");
const withdrawInput = document.querySelector("#withdraw-amount");
const transactionList = document.querySelector("#transaction-history");

const bankAccount = {
  balance: 0,
  transactions: [],

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push(`Deposited $${amount.toFixed(2)}`);
      this.updateUI();
    }
  },

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        this.transactions.push(`Withdrew $${amount.toFixed(2)}`);
        this.updateUI();
      } else {
        alert("❌ Not enough funds!");
      }
    }
  },

  checkBalance() {
    balanceEl.textContent = `$${this.balance.toFixed(2)}`;
  },

  viewTransactionHistory() {
    transactionList.innerHTML = "";
    this.transactions.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      transactionList.appendChild(li);
    });
  },

  updateUI() {
    this.checkBalance();
    this.viewTransactionHistory();
  },
};

document.querySelector("#btn-deposit").addEventListener("click", () => {
  const amount = parseFloat(depositInput.value);
  bankAccount.deposit(amount);
  depositInput.value = "";
});

document.querySelector("#btn-withdraw").addEventListener("click", () => {
  const amount = parseFloat(withdrawInput.value);
  bankAccount.withdraw(amount);
  withdrawInput.value = "";
});

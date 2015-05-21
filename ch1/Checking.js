function Checking(amount) {
  this.balance = amount; // property
  this.deposit = deposit; // function
  this.withdraw = withdraw; // function
  this.toString = toString; // function
}

function deposit(amount) {
  this.balance += amount;
}
function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    print("Insufficient funds");
  }
}
function toString() {
  return "Balance: " + this.balance;
}

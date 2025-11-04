const account = {
    accountName: "Spongebob",
    balance: 100,
    getBalance: function() {
        console.log(this.balance)
    },
    deposit: function() {
        this.balance= (this.balance + 10)
    },
    withdrawal: function() {
        this.balance - 50
    },
    getAccountName: function() {
        console.log(this.accountName)
    },
}
account.getBalance();
console.log(account.accountName);
account.deposit();


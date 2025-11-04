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

    },
    getAccountName: function() {

    }
}
account.getBalance();

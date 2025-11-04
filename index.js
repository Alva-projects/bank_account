const account = {
    accountName: "Spongebob", /* This is the bank account holder's name */
    balance: 100, /* This is your starting balance */
    getBalance: function() {
        console.log(this.balance)
    },
    deposit: function() {
        this.balance = this.balance + 10; /* <-- Make a deposit by changing this number */
    },
    withdrawal: function() {
        this.balance = this.balance - 50 /* <-- Make a withdrawal by changing this number */
    },
    getAccountName: function() {
        console.log(this.accountName);
    },
    accountError: function() {
        let enterName = "Spongebo";
        if (this.accountName !== enterName){
            console.log("You really shouldn't steal other people's money...")
        }
    }
}
console.log(account.accountName);
account.withdrawal();
account.deposit();
account.getBalance();



const account = {
    accountName: "Spongebob",
    balance: 100,
    getBalance: function(){
                console.log(account.balance)
    }
    deposit: function() {
        this.balance= (this.balance + 10)
    }
}
account.getBalance();

const account = {
    
    accountName: "Spongebob", /* This is the bank account holder's name, who is the only person allowed into the bank account */
    balance: 100, /* This is your starting balance */
    
    getAccountName() {
        return this.accountName
    },
    getBalance() {
        return this.balance
    },
    deposit() {
    let depAmount = parseFloat(prompt("How much would you like to deposit?"));
    let newBalance = depAmount + this.balance;
    return newBalance;
},
    withdraw() {
    let witAmount = parseFloat(prompt("How much would you like to withdraw?"));
    let newBalance = this.balance - witAmount;
    return newBalance;
},
};

function atm() {
    const input = parseFloat (
        prompt (
            "Select a choice\n 1) See balance\n 2) Make a deposit\n 3) Make a withdrawal\n 4) Get account name\n 5) Exit"
        )
    );

    const message = input;
    switch (message) {
        case 1: 
            console.log(account.getBalance()); 
        break;
        case 2: console.log(account.deposit());
        break;
        case 3: console.log(account.withdraw());
        break;
        case 4: console.log(account.getAccountName());
        break;
        case 5: console.log("Thank you for using this ATM. Goodbye!")
        break;
    }
    
};
function accountError(account) {
    const enteredName = (prompt ("Please enter your username:"));
    const name = account.getAccountName();
    if (name !== enteredName){
        return console.log("You really shouldn't steal other people's money...")
    }
        else {
            atm();
        }
    };
accountError(account);
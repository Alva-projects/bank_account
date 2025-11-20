const account = {
    accountName: "Spongebob", /* This is the bank account holder's name, who is the only person allowed into the bank account */
    balance: 0, /* This is your starting balance */

    getAccountName: function() {
        console.log("Account holder: " + this.accountName);
    },
    deposit: function() {
        const deposit = Number(window.prompt ("How much would you like to deposit?"));
        this.balance = this.balance + deposit; 
        console.log(`You have deposited ${deposit}`);
    },
    withdrawal: function() {
        const withdrawal = Number(window.prompt ("How much would you like to withdraw?"));
        this.balance = this.balance - withdrawal;
        console.log(`You have withdrawn ${withdrawal}`);
    },
    accountError: function() {
        const enteredName = (window.prompt ("Please enter your username:"));

        if (this.accountName !== enteredName){
            return false;
        }
        else {
            return true;
        }
    },
    getBalance: function() {
        console.log("Current balance: " + this.balance)
    },
};

if (account.accountError() === true) {
   account.deposit();
    account.withdrawal();
    account.getBalance(); 
} else {
    console.log("You really shouldn't steal other people's money...");
}; 

function atm() {
    const message = parseFloat (
        prompt (
            "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );

    switch (message) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
    }
};
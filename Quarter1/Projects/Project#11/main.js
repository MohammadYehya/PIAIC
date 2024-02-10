class BankAccount {
    AccountBalance;
    constructor() {
        this.AccountBalance = 0;
    }
    Debit(amount) {
        let statement = 'Sorry, you have insufficient balance!';
        if (amount > 0) {
            statement = 'The amount you entered is wrong!';
            if (this.AccountBalance > amount) {
                this.AccountBalance -= amount;
                statement = 'Transaction successful! New account balance is ' + this.AccountBalance;
            }
            else
                statement = 'You dont have enough money to do this transaction!';
        }
        return statement;
    }
    Credit(amount) {
        let statement = 'Transaction Failed!';
        if (amount > 0) {
            this.AccountBalance += amount;
            if (amount > 100)
                this.AccountBalance -= 1;
            statement = 'Your account has been credited successfully!';
        }
        return statement;
    }
}
class Customer {
    name;
    Gender;
    Age;
    MobileNumber;
    bankAccount;
    constructor(name, Gender, age, MobileNumber, bankAccount) {
        this.name = name;
        this.Gender = Gender;
        this.Age = age;
        this.MobileNumber = MobileNumber;
        this.bankAccount = bankAccount;
    }
    CustomerInfo() {
        return `Name: ${this.name}\nAge: ${this.Age}\nGender: ${this.Gender}\nMobile: ${this.MobileNumber}\nAccountBalance: ${this.bankAccount.AccountBalance}`;
    }
}
export {};

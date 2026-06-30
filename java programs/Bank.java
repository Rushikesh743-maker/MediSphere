class BankAccount {

    int accountNo;
    String holderName;
    double balance;

    void deposit(double amount) {
        balance = balance + amount;
    }

    void withdraw(double amount) {
        balance = balance - amount;
    }

    void display() {

        System.out.println("Account Number : " + accountNo);
        System.out.println("Holder Name    : " + holderName);
        System.out.println("Balance        : " + balance);
    }
}

public class Bank{

    public static void main(String[] args) {

        BankAccount b1 = new BankAccount();

        b1.accountNo = 12345;
        b1.holderName = "Amit";
        b1.balance = 5000;

        b1.deposit(1500);
        b1.withdraw(1000);

        b1.display();
    }
}

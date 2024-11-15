let account = {
    name: '',
    balance: 0
};

function createAccount() {
    const nameInput = document.getElementById('accountName').value;
    if (nameInput) {
        account.name = nameInput;
        account.balance = 0;
        document.getElementById('message').innerText = `Account created for ${account.name}`;
    } else {
        document.getElementById('message').innerText = 'Please enter an account name.';
    }
}

function deposit() {
    const amountInput = document.getElementById('depositAmount').value;
    const amount = parseFloat(amountInput);
    if (account.name && !isNaN(amount) && amount > 0) {
        account.balance += amount;
        document.getElementById('message').innerText = `Deposited $${amount}. New balance: $${account.balance}`;
    } else {
        document.getElementById('message').innerText = 'Please enter a valid deposit amount.';
    }
}

function checkBalance() {
    if (account.name) {
        document.getElementById('message').innerText = `Current balance: $${account.balance}`;
    } else {
        document.getElementById('message').innerText = 'Please create an account first.';
    }
}
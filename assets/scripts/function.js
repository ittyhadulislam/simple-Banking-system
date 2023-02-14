// ---------------------- login function ----------------------
function login() {

    // email and password input field
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;

    //check if email and password are valid not not
    if (email === "az.walker30822@gmail.com" && password === "123") {
        window.location.href = "index.html";
    }
    else {
        alert("Invalid Credentials");
    }
}


// ---------------------- deposit function ----------------------
function deposit() {

    // deposit input field
    const deposit_amount = document.getElementById("input-deposit")
    const amount = deposit_amount.value

    // clear input field
    deposit_amount.value = ""

    // handel Not a Number
    if (isNaN(parseFloat(amount))) {
        alert("Please enter a valid amount")
        return
    }

    //deposit card text
    const deposit_total = document.getElementById("deposit-amount").innerText
    let amount_ = parseFloat(deposit_total) + parseFloat(amount);
    document.getElementById("deposit-amount").innerText = amount_

    // balance card text update
    const balance = document.getElementById("total-balance").innerText
    let total_balance = parseFloat(balance) + parseFloat(amount)
    document.getElementById("total-balance").innerText = total_balance
}


// ---------------------- withdraw function ----------------------
function withdraw() {

    // withdraw input field
    const withdraw_amount = document.getElementById("input-withdrow")
    const amount = withdraw_amount.value;

    // clear input field
    withdraw_amount.value = ""

    // handel Not a Number
    if (isNaN(parseFloat(amount))) {
        alert("Please enter a valid amount")
        return
    }

    //withdraw card text
    const withdraw_total = document.getElementById("withdraw-amount").innerText;
    amount_ = parseFloat(withdraw_total) + parseFloat(amount)
    document.getElementById("withdraw-amount").innerText = amount_

    // balance card text update
    const balance = document.getElementById("total-balance").innerHTML
    let total_balance = parseFloat(balance) - parseFloat(amount)
    document.getElementById("total-balance").innerText = total_balance
}
// document.querySelector("form").addEventListener("submit", function (event) {
//     event.preventDefault();
//     let inputEmail = document.querySelector("#email").value;
//     let inputPassword = document.querySelector("#password").value;

//     alert("GHello")
// })
let loginScreen = document.querySelector(".loginForm");
let dashboardScreen = document.querySelector(".accountWindow");
document.querySelector("#firstForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let inputEmail = document.querySelector("#email").value;
    let inputPassword = document.querySelector("#password").value;

    if (inputEmail == 1) {
        loginScreen.classList.add("toggle");
        dashboardScreen.classList.remove("toggle");
    } else {

        // let warning = document.createElement("p");
        // warning.innerHTML = "<span style='color:red;margin-left:1rem'>invalid password<br></span>";
        // let passwordSec = document.querySelector("form button");
        // passwordSec.before(warning)
        let warning = document.querySelector(".warning small");
        warning.innerHTML = "Hello"

    }
})
document.querySelector("#logOutBtn").addEventListener("click", function (event) {
    event.preventDefault();
    loginScreen.classList.remove("toggle");
    dashboardScreen.classList.add("toggle");
})





let deposited = 0;
let balance = 0;
let withdrawn = 0;
let depositScreen = document.querySelector(".box-2 h3 span");
let balanceScreen = document.querySelector(".box-1 h3 span");
let withdrawScreen = document.querySelector(".box-3 h3 span");
let depositInvalid = document.querySelector("#depositInvalid");
let withdrawInvalid = document.querySelector("#withdrawInvalid");
document.querySelector("#depositForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let depositAmount = document.querySelector("#deposit").value;

    if (depositAmount > 0) {
        depositInvalid.innerHTML = "";
        depositScreen.innerText = ""
        deposited += parseInt(depositAmount);
        balance += parseInt(depositAmount)
        depositScreen.innerText += deposited;
        balanceScreen.innerText = balance
    } else if (depositAmount <= 0) {
        depositInvalid.innerHTML = "Invalid input";
    }

})
document.querySelector("#withdrawForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let withdrawAmount = document.querySelector("#withdraw").value;

    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        withdrawInvalid.innerHTML = "";
        withdrawScreen.innerText = ""
        withdrawn += parseInt(withdrawAmount);
        balance -= parseInt(withdrawAmount)
        withdrawScreen.innerText += withdrawn;
        balanceScreen.innerText = balance
    } else if (withdrawAmount <= 0) {
        withdrawInvalid.innerHTML = "Invalid input";
    } else if (withdrawAmount > balance) {
        withdrawInvalid.innerHTML = "Insufficient Balance";
    }

})
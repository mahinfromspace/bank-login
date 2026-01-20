// document.querySelector("form").addEventListener("submit", function (event) {
//     event.preventDefault();
//     let inputEmail = document.querySelector("#email").value;
//     let inputPassword = document.querySelector("#password").value;

//     alert("GHello")
// })

let accounts = []
accounts[0] = {
    name: "Mahin Ahmed",
    balance: 290000,
    accountNo: 25014
}
accounts[1] = {
    name: "Prarthana Wagle",
    balance: 1000,
    accountNo: 25015
}
accounts[2] = {
    name: "Rahul Jaygirder",
    balance: 1000,
    accountNo: 25016
}
let userName = document.querySelector(".accountName h1")
let user = {};
let balance = 0;

let loginScreen = document.querySelector(".loginForm");
let dashboardScreen = document.querySelector(".accountWindow");
document.querySelector("#firstForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let inputEmail = document.querySelector("#email").value;
    let inputPassword = document.querySelector("#password").value;

    for (i = 0; i < accounts.length; i++) {
        if (inputEmail == accounts[i].accountNo) {
            loginScreen.classList.add("toggle");
            dashboardScreen.classList.remove("toggle");
            user = accounts[i];
            balance = user.balance;
            userName.innerText = user.name
            balanceScreen.innerText = balance;


        }
    }
    if (inputEmail == "admin") {
        let adminWindow = document.querySelector(".adminWindow")
        let table = document.querySelector(".accountInfos table")
        loginScreen.classList.add("toggle");
        dashboardScreen.classList.add("toggle");
        adminWindow.classList.remove("toggle");


        for (i = 0; i < accounts.length; i++) {
            let newLine = document.createElement("tr");
            newLine.innerHTML = `<td>${accounts[i].name}</td> <td>${accounts[i].accountNo}</td> <td>${accounts[i].balance}</td>`
            table.append(newLine)
        }


    }


    // else {

    //     // let warning = document.createElement("p");
    //     // warning.innerHTML = "<span style='color:red;margin-left:1rem'>invalid password<br></span>";
    //     // let passwordSec = document.querySelector("form button");
    //     // passwordSec.before(warning)
    //     let warning = document.querySelector(".warning small");
    //     warning.innerHTML = "Hello"

    // }
})




let deposited = 0;

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

document.querySelector("#transferForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let transferAccount = document.querySelector("#accountNumber").value;
    let transferAmount = parseInt(document.querySelector("#transferAmount").value);
    let databaseAccount = 0;
    let accountFound = false;
    for (i = 0; i < accounts.length; i++) {
        databaseAccount = accounts[i].accountNo;
        if (user.accountNo != transferAccount) {
            if (databaseAccount == transferAccount) {
                balance -= transferAmount;


                accounts[i].balance += transferAmount;
                balanceScreen.innerText = balance;
                document.querySelector(".info h4").innerHTML = accounts[i].name;
                document.querySelector(".info h5").innerHTML = accounts[i].accountNo;
                accountFound = true;
                break
            }
        }
    }
    if (accountFound == false && user.accountNo != transferAccount) {
        alert("Not found");
    } else if (user.accountNo == transferAccount) {
        alert("Same acc")
    }
})

let editBtn = document.querySelector(".edit");
let editInput = document.createElement("input");
editInput.setAttribute("type", "text");
editBtn.addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector(".accountInfos").append(editInput)

})
document.querySelector(".save").addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector(".edited").innerHTML = editInput.value
})


document.querySelector("#logOutBtn").addEventListener("click", function (event) {
    event.preventDefault();
    loginScreen.classList.remove("toggle");
    dashboardScreen.classList.add("toggle");
    document.querySelector("#deposit").value = 0;
    document.querySelector("#withdraw").value = 0;
    user.balance = balance;
})




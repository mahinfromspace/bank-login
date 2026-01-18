// document.querySelector("form").addEventListener("submit", function (event) {
//     event.preventDefault();
//     let inputEmail = document.querySelector("#email").value;
//     let inputPassword = document.querySelector("#password").value;

//     alert("GHello")
// })
let loginScreen = document.querySelector(".loginForm");
let dashboardScreen = document.querySelector(".accountWindow");
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let inputEmail = document.querySelector("#email").value;
    let inputPassword = document.querySelector("#password").value;
    if (inputEmail == 1) {
        loginScreen.classList.add("toggle");
        dashboardScreen.classList.remove("toggle");
    } else {
        let warning = document.createElement("p");
        warning.innerHTML = "<span style='color:red;margin-left:1rem'>invalid password<br></span>";
        let passwordSec = document.querySelector("form button");
        passwordSec.before(warning)
    }
})

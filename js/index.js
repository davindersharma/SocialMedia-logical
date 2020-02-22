import user from "./user.js";
import app from "./app.js";


let newapp = new app();

var u = new user();

const $ = (ele) => {
    return document.querySelector(ele);
}


$(".btnRegister").onclick = () => {
    var name = $('.name').value;
    var userId = $('.userId').value;
    var password = $('.password').value;
    var unique = true;



    try {
        JSON.parse(localStorage.getItem("registeredUsers")).forEach(user => {
            if (user.userId == userId) {
                alert("User id already exists.");
                unique = false;
            }
        });
        if (!unique) {
            var u = new user(name, userId, password);
            console.log(u);

            newapp.UsersRegistered.push(u);

            console.log(newapp.UsersRegistered);

            localStorage.setItem("registeredUsers", JSON.stringify(newapp.UsersRegistered));
        }

    } catch (error) {
        if (unique) {
            var u = new user(name, userId, password);
            console.log(u);

            newapp.UsersRegistered.push(u);

            console.log(newapp.UsersRegistered);

            localStorage.setItem("registeredUsers", JSON.stringify(newapp.UsersRegistered));
        } else {
            alert("User already exists.");
        }

    }
}

$(".btnLogin").onclick = () => {
    var userId = $('.userIdLogin').value;
    var password = $('.passwordLogin').value;
    u.LogIn(userId, password);
    console.log(JSON.parse(localStorage.getItem("loggedInUser")));
}

$('.btnLogout').onclick = () => {
    localStorage.clear();
}
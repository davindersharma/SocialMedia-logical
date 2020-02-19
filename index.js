import user from "./user.js";
import app from "./app.js";
let newapp= new app();
var u = new user();
const $ = (ele)=>{
    return document.querySelector(ele);
}


$(".btnRegister").onclick=()=>{
    var name=$('.name').value;
    var userId=$('.userId').value;
    var password=$('.password').value;

    var u=new user(name,userId,password);
    newapp.UsersRegistered.push(u);
    console.log(newapp.UsersRegistered);
    
    localStorage.setItem("registeredUsers",JSON.stringify(newapp.UsersRegistered));
}

$(".btnLogin").onclick=()=>{
    var userId=$('.userIdLogin').value;
    var password=$('.passwordLogin').value;
    try {
        newapp.UserLoggedIn=u.LogIn(userId,password);        
    } catch (error) {
        alert("Invalid Info. Access Denied");
    } 
        
}
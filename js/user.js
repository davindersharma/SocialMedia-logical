class user {
    name;
    userId;
    password;
    friends = [];
    posts = [];
    chat = [];



    constructor(name, userId, password) {
        this.name = name;
        this.userId = userId;
        this.password = password;
    }

    LogIn(userId, pswd) {
        let loggedIn = false;
        let loggedInUser;
        try {
            JSON.parse(localStorage.getItem("registeredUsers")).forEach(user => {
                if (user.userId == userId && user.password == pswd) {
                    alert("Welcome " + user.name);
                    loggedIn = true;
                    localStorage.setItem("loggedInUser", JSON.stringify(user))
                }
            });
            if (!loggedIn) {
                alert("Invalid Info, Access Denied");
            }
        } catch (error) {
            alert("No users are registered.");
        }
    }


    SendRequest() {

    }

    SendMessage() {

    }



}

export default user
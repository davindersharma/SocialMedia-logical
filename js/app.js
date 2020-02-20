import user from "./user.js";

class app {
    UserLoggedIn;
    UsersRegistered = [];
    constructor() {
        this.LoggedIn = false;
    }

    isUniqueUser() {
        JSON.parse(localStorage.getItem("registeredUsers")).forEach(user => {
            if (user.userId == userId) {
                alert("User id already exists.");
            }
        });
    }
}

export default app
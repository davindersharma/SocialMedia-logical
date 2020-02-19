class user{
    name;
    userId;
    password;
    friends=[];
    posts=[];
    chat=[];

    

    constructor(name,userId,password){
        this.name=name;
        this.userId=userId;
        this.password=password;
    }

    LogIn(userId,pswd){
        let loggedIn=false;
        let loggedInUser;
        localStorage.getItem("registeredUsers").forEach(user => {
            if(user.userId==userId && user.password==pswd)
            {
                alert("Welcome " + user.name);
                loggedIn=true;
                loggedInUser=user;
            }
            
        });
        if(loggedIn)
        {
            return loggedInUser;
        }
    }


    SendRequest(){

    }

    SendMessage(){

    }



}

export default user
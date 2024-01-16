const user = {
    username: "Abhisek",
    LoginCount: 8,
    isLoggedIn: true,
    
    getUserDetails: function () {
        console.log(`Username: ${this.username}, Login Count: ${this.LoginCount}, Logged In: ${this.isLoggedIn}`);
    }
}

console.log(user.username);
user.getUserDetails();

const promiseOne = new Promise((resolve, reject) => {
    // Your asynchronous code or logic here
    // If the asynchronous operation is successful, call resolve
    // resolve(result);
    // If there is an error, call reject
    // reject(error);
    
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    };
});

const date = new Date();

function User(userName, LoginCount, isLoggedIn) {
    this.username = userName;
    this.LoginCount = LoginCount;
    this.isLoggedIn = isLoggedIn;
    // Return 'this' implicitly (you don't need to explicitly return 'this')
}

const userOne = new User("Abhisek", 12, true);
const userTwo = new User("Abhisek JavaScript", 11, false);
console.log(userOne);
console.log(userTwo);

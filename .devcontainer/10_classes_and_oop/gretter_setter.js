class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
         this._email
    }

    get password() {
        return  `${this._password}Abhisek`
    }

    set password(value) {
        this._password = value.toUpperCase();
    }
}

const abhi = new User("abhi@gmail.com", "abc");
console.log(abhi.password);
console.log(abhisek.email);
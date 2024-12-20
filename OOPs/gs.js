class User {

    // constructor will set the name
    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if(value.length < 4){
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

// getter function
let user = new User("John");
console.log(user.name);
// alert(user.name); 


// user = new User("");
// setter function
user.name = "Deepak"
console.log(user)
class Person {
    constructor(firstName, lastname, age, email) {
        this.firstName = firstName;
        this.lastName = lastname;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');

console.log(person.toString());
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(id, fnm, lnm) {
        this.id = id;
        this.firstName = fnm;
        this.lastName = lnm;
    }
    display() {
        console.log('Student ID:' + this.id);
        console.log('Student Type: Full Time');
        console.log('First Name:' + this.firstName);
        console.log('Last Name:' + this.lastName);
    }
    print() {
        console.log('Printing from the Student class');
    }
}
exports.default = Student;

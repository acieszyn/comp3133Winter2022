"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./Student"));
class PartTimeStudent extends Student_1.default {
    constructor(id, fnm, lnm, ct) {
        super(id, fnm, lnm);
        this.classTiming = ct;
    }
    display() {
        console.log('Student ID:' + this.id);
        console.log('Student Type: Part Time');
        console.log('First Name:' + this.firstName);
        console.log('Last Name:' + this.lastName);
        console.log('Class Timing: ' + this.classTiming);
    }
}
exports.default = PartTimeStudent;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./Student"));
const PartTimeStudent_1 = __importDefault(require("./PartTimeStudent"));
var p1 = new Student_1.default(1, 'George', 'Washington');
p1.display();
var p2 = new PartTimeStudent_1.default(2, 'Elizabeth', 'Windsor', 'Evenings');
p2.display();

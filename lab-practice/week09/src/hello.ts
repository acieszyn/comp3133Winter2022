var message = "Hello TypeScript";
var msg: String = "Hello";
var m: string = "Hello again";
var id: number = 1000;
var check: Boolean = true;

var s: String;
s = "String values";
console.log(message);

var y: string | number | boolean;
y = "Hello";
y = 100;
y = true;

const x1 = 100;

function add(a: number, b: number) {
    return a + b;
}
console.log(add(5, 10));
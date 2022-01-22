console.log("Week01 Thursday Lab Example");

console.log(__dirname);
console.log(__filename);

let buf1 = Buffer.from("Hello");
console.log(buf1);
console.log(buf1.toString("utf8"));
console.log(buf1.length);

let str = '®'//'🙏💐';
let buf2 = Buffer.from(str);
console.log(buf2.toString());
console.log(buf2.length);
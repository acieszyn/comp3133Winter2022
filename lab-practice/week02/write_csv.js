const fs = require("fs");

const title = "empid, fnm, lnm, salary";
fs.writeFileSync("employee.csv", title);
fs.appendFileSync("employee.csv", '\n1, Pritesh, Patel, 1000.00');
fs.appendFileSync("employee.csv", '\n2, Chintan, Patel, 1500.00');
fs.appendFileSync("employee.csv", '\n3, Gustavo, Beltran, 7000.00');
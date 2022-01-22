var fs = require('fs');

console.log("--- START - 1 ---");
//Read File Async
fs.readFile("input.txt", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data.toString());
});

console.log("--- END - 1 ---");

// Read File Sync
console.log("--- START - 2 ---");
var data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("--- END - 2 ---");

//Write Data Async
//var str = "Hello World";
//fs.writeFile("output.txt", str, (err) => {
//    console.log("Data written success...");
//});

//Write Data Sync
//fs.writeFileSync();

//Append Data to File Async
str = "\nHello World again using fs.appendFile()";
fs.appendFile("output.txt", str, () => {
    console.log("Data appended successfully...");
});

//Append Sync
//fs.appendFileSync();

fs.unlink("output_1.txt", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File deleted successfully...");
});

fs.stat("./", (err, stat) => {
    if (err) {
        console.log(err);
        return;
    }

    //console.log(stat);
    console.log(`isDirectory : ${stat.isDirectory()}`);
    console.log(`isFile : ${stat.isFile()}`);
});

//Create New Directory
fs.mkdir('test', (err) =>{
    console.log("Directory created successfully...");
});

//Remove Directory
//fs.rmdirSync('test');
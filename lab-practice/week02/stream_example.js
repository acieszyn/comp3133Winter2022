var fs = require("fs");

var readStream = fs.createReadStream("input_stream.txt");
var msg = "";

//Data Event
readStream.on("data", (rawData) => {
    console.log(`Data: ${rawData.toString()}`);
    msg += rawData.toString();
});

//Error Event
readStream.on("error", (err) => {
    console.log(`Error: ${err}`);
});

//End Event
readStream.on("end", () => {
    console.log(`Message: ${msg}`);
    console.log("Read Stream End");
});

//readStream.push("Hello - 1\n");
//readStream.push("Hello - 2\n");

var writeStream = fs.createWriteStream("output_stream.txt");

//Finish Event
writeStream.on("finish", (err) => {
    console.log("Data write finish");
});

writeStream.on("error", (err) => {
    console.log(`Error: ${err}`);
});

writeStream.write("Pritesh");
writeStream.write("Chintan");
writeStream.write("Gustavo");
writeStream.write("Kunga");
writeStream.write("Saloni");

writeStream.end();
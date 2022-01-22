const fs = require("fs");
const zlib = require("zlib");


var readStream = fs.createReadStream("input_stream.txt");
var writeStream = fs.createWriteStream("output_stream.txt");

readStream.pipe(writeStream);

readStream.pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("input_stream.txt.gz"));
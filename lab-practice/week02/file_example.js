var fs = require("fs")

//r - read only
//r+ - Read + Write
//w - Write only
//w+ Write + Read
//a - Append
//rs - Read Sync
//wx - Write and error if file not found
fs.open("data.txt", "r+", (err, fd) => {
    var buf = Buffer.alloc(10);

    if (err) {
        console.log(err);
        return;
    }

    fs.read(fd, buf, 0, buf.length, 0, (err, n, data) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(buf.toString());
        console.log(err, n, data.toString());
    });

    fs.write(fd, Buffer.from("Full Stack Development - II"), (err, n, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Write success...");
        console.log(err, n, data);

        fs.close(fd, () => {
            console.log("File closed...");
        })
    });
});
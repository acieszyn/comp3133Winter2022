const csv = require("csv-parser");
const fs = require("fs");

const CANADA_TXT = "canada.txt";
const USA_TXT    = "usa.txt";
const INPUT_CSV  = "input_countries.csv";

function DeleteFile(filePath) {
    fs.unlink(filePath, (err) =>{
        if (err) {
            console.log(`${filePath} does not exist`);
            return;
        }
        console.log(`${filePath} successfully deleted`);
    });
}

function AppendToFile(filePath, str) {
    fs.appendFile(filePath, str, (err) => {
        if (err) console.log("Append unsuccessful");
    });
}

DeleteFile(CANADA_TXT);
DeleteFile(USA_TXT);

const readStream = fs.createReadStream(INPUT_CSV);

readStream.pipe(csv())
    .on("headers", (headers) => {
        let entry = `${headers[0]},${headers[1]},${headers[2]}\n`;
        AppendToFile(CANADA_TXT, entry);
        AppendToFile(USA_TXT, entry);
    })
    .on("data", (row) => {
        let entry = `${row.country},${row.year},${row.population}\n`;
        switch (row.country) {
            case "Canada": {
                AppendToFile(CANADA_TXT, entry);
                break;
            }
            case "United States": {
                AppendToFile(USA_TXT, entry);
                }
        }
    })
    .on("end", () => {
        console.log("CSV file successfully processed");
    });

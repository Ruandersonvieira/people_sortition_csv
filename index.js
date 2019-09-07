const csv = require("csv-parser");
const fs = require("fs");
const sort = [];

fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", data => sort.push(data))
  .on("end", () => {
    let aux = parseInt(Math.random() * (sort.length - 0) + 0);
    return console.log(sort[aux]);
  });

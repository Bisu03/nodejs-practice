const fs = require("fs");

const data = fs.readFileSync("mybio.txt", "utf-8", () => {
  console.log(data);
});

console.log("befor data");

const fs = require("fs");

// const data = fs.readFileSync("mybio.txt","utf-8");

// fs.readFile("mybio.txt","utf-8",(err,data)=>{
// console.log(data);
// })
// console.log('after data');
// console.log(data);

// fs.appendFile("mybio.txt", "new data added",
//   (err) => {
//     console.log("task completed");
//   })


fs.readFile('mybio.txt','utf-8',(error,data)=>{
    console.log(data);
})
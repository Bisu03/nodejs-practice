const fs = require("fs");

const biodata = {
  name: "bisu",
  age: 21,
  realname: "biswanath bera",
};

// const joindata = JSON.stringify(biodata);

// fs.writeFile('mydata.json',data,(error)=>{
// console.log("done");
// })

fs.readFile("mydata.json", "utf-8", (err, data) => {
  const ondata = JSON.parse(data);
  console.log(data);
  console.log(ondata);
});

// const ondata=JSON.parse(data)

// console.log(ondata.name);

const fs = require("fs");
const http = require("http");

const locahost = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/api/user.json`, "utf-8",{ "content-type": "application/json" });
  const getdata = JSON.parse(data);

  if (req.url == "/") {
    res.end("Hello, World!");
  } else if (req.url == "/about") {
    res.end("about me");
  } else if (req.url == "/userapi") { 
    console.log(getdata);
    res.end(getdata[0].name);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1> 404 error </h1>");
  }
});

server.listen(port, locahost, "localhost", () => {
  console.log(`Server running at http://${locahost}:${port}`);
});

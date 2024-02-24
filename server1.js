const http = require("http");
require('dotenv').config()

const jsonData = {
  network: 7,
  jobs: 8,
  messaging: 7,
  notification: 5,
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(jsonData));
});

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

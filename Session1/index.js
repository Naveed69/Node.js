const http = require("http");

const PORT = 8080;
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (method !== "GET") {
    res.writeHead(405);
    res.write("Method Not Allowed..!!");
  } else {
    if (url === "/") {
      res.write("Hello Naveed server started");
    }

    if (url === "/contact") {
      res.write("mob:9008888569 mail:naveed.desai.69@gmail.com");
    }

    if (url === "/fitness") {
      const fitness = {
        name: "Naveed",
        age: 27,
        height: 173,
        diet: ["3 meals", "eggs", "snacks"],
        address: {
          street: "3rd cross",
          house: "naveed homes",
          houseNo: 25,
        },
      };
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(fitness));
    }
  }
  console.log("server started to listen");
  res.end();
});

server.listen(PORT, () => {
  console.log("Server started to Listed at 8080");
});

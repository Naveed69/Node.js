const express = require("express");
const HomeRouter = require("./Routes/HomeRouter");
const ApiRouter = require("./Routes/ApiRouter");
const { ApiGenderSearch } = require("./Controllers/Api_Controller");
const server = express();
const port = process.env.PORT || 3000;

//home rout calls
server.use("/", HomeRouter);

// api rout calling and searching
server.use("/api/v1/user", ApiRouter);

server.listen(port, () => {
  console.log("Server started to listen on port:", port);
});

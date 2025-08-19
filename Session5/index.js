const express = require("express");
const {
  HomeCotroller,
  ContactCotroller,
} = require("./Controllers/HomeController");
const {
  ApiCall,
  ApiSearchUser,
  ApiCallAllUsers,
} = require("./Controllers/Api_Controller");
const server = express();
const port = process.env.PORT || 3000;

//home calls
server.get("/", HomeCotroller);

server.get("/contact", ContactCotroller);

// api calling and searching
server.get("/api/v1/user", ApiCall);

server.get("/api/v1/user/allUser", ApiCallAllUsers);

server.get("/api/v1/user:", ApiSearchUser);

server.listen(port, () => {
  console.log("Server started to listen on port:", port);
});

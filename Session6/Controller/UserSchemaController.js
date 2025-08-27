const { user } = require("../Models/userModel");

const addUser = async (req, res) => {
  //   const { name, age, mobile, branch } = req.body;
  console.log(req.body);
  try {
    // const newuser = user({
    //   name,
    //   age,
    //   mobile,
    //   branch,
    // });
    console.log("newuser");
    res.send("User added successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addUser };

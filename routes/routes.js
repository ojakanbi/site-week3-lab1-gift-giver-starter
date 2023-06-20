const express = require("express");
const router = express.Router();


const User = require("../models/user");
let user1 = new User(1, "Alice");



router.get("/", (req, res) => {
    res.send(user1);
  });


  module.exports = router;
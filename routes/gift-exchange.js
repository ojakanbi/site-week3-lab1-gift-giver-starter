const express = require("express");
const router = express.Router();
const User = require("../models/gift-exchange");

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi"]

let namess = new User()


let pairedName = namess.pairs(names)
let traditionalName = namess.traditional



router.post("/pairs", async (req, res) => {
  res.status(200).json(namess.pairs(req.body))
  

  

})

router.post("/traditional", async (req, res) => {
  res.status(200).json(namess.traditional(req.body))
})


module.exports = router;
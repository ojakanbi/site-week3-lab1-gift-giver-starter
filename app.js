const express = require("express")
const morgan = require("morgan")

const app = express()
const error = require("./utils/error")

app.use(morgan("tiny")) //logging request along with some other information 

// error middleware



app.use(express.json())


app.get("/", async (req, res) => {
  res.json({ ping: "pong" })
})



module.exports = app



const express = require("express");
// const app = express();
// const port = 3000;
// const User = require("./models/user");
// const routes = require("./routes/routes");


// // app.use("", {})
// let user1 = new User(1, "Alice");


// app.use("/", routes);
// app.use(express.json());

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// })




// module.exports = app;

const giftExchangeRouter = require("./routes/gift-exchange")
const app = require("./app")


const port = process.env.PORT || 3000

app.use("/gift-exchange", giftExchangeRouter)



app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`)
})

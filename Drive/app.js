const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.routes.js");
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());



app.use("/user", userRoute);



app.listen(3000, () => {
  console.log("Listening to Port 3000");
});

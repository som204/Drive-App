const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.routes.js");
const dotenv = require('dotenv');
const connectToDB = require('./config/db.js');
const cookieParser = require('cookie-parser');



const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());

dotenv.config();
connectToDB();


app.use("/user", userRoute);



app.listen(3000, () => {
  console.log("Listening to Port 3000");
});

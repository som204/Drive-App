const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.routes.js");
const fileRoute = require("./routes/file.routes.js");
const dotenv = require('dotenv');
const connectToDB = require('./config/db.js');
const cookieParser = require('cookie-parser');
const multer  = require('multer')

          



const app = express();


app.use(cookieParser());
app.use(cors());
app.use(express.json());

dotenv.config();
connectToDB();


app.use("/user", userRoute);
app.use("/", fileRoute);



app.listen(3000, () => {
  console.log("Listening to Port 3000");
});

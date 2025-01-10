const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user.routes.js");
const fileRoute = require("./routes/file.routes.js");
const connectToDB = require("./config/db.js");

app.use(cookieParser());

app.use(express.json());

connectToDB();

app.use("/user", userRoute);
app.use("/", fileRoute);

app.listen(3000, () => {
  console.log("Listening to Port 3000");
});

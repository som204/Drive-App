const jwt = require("jsonwebtoken");

function authorization(req, res, next) {
  const token = req.cookies.token;
  //console.log(token);
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized User1",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();


  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized User2",
    });
  }
}

module.exports = authorization;

const { verify } = require("jsonwebtoken");
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "auth Token not present" });
    return;
  }
  const authToken = authHeader.split(" ")[1];
  verify(authToken, "secret", (err, decoded) => {
    if (err) {
      res.status(403).send("Invalid token");
      return;
    }
    if (typeof decoded === "object" && decoded != null) {
      req.user = decoded;
      next();
    } else {
      res.status(403).send("Invalid token structure");
      return;
    }
  });
}
module.exports = {
  authenticate,
};

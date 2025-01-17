const { sign } = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const { insertUsers } = require("../database/operations");
async function signup(req, res) {
  const { name, email, password } = req.body;
  await bcrypt.hash(password, 10, (err, hash) => {
    insertUsers(name, email, hash);
  });
  res.status(200).json({ status: "done" });
}
module.exports = { signup };

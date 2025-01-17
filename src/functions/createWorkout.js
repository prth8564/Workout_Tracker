const { insertWorkout } = require("../database/operations.js");

async function createWorkout(req, res) {
  res.json({ "in here": "yes you are" });
}
module.exports = {
  createWorkout,
};

const express = require("express");
const { signup } = require("./functions/signup.js");
const { login } = require("./functions/login.js");
const { createWorkout } = require("./functions/createWorkout.js");
const { authenticate } = require("./middlewares/authenticate.js");

const app = express();
app.use(express.json());

app.post("/signup", signup);

app.post("/login", login);
app.post("/createWorkout", authenticate, createWorkout);

app.post("/editWorkout", (req, res) => {});

app.post("/updateWorkout", (req, res) => {});

app.listen(8000, () => {
  console.log("running on 8000");
});

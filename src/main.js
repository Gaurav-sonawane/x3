const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "I AM GAURAV SONAWANE " });
});

app.post("/add-user", (req, res) => {
  res.json({ messege: "i am trying to add new user" });
});

app.listen(4000, () => console.log("server started"));

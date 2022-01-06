const express = require("express");
const app = express();

app.use(express.json());

const { selectUser, addUser } = require("./user");

app.get("/users", async (req, res) => {
  const list = await selectUser();
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ messege: "user added successfully" });
});
app.listen(4000, () => console.log("server started"));

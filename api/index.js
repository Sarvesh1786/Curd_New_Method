const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect("mongodb://localhost:27017/users", {
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("MongoDB Connected successfully"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/getUsers", async (req, res) => {
  const users = await userModel.find({});
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/getUser/:id", async (req, res) => {
  // console.log(Number(req.params.id));
  try {
    const user = await userModel.findOne({ id: Number(req.params.id) });
    // console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/addUser", async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/updateUser/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const { name, email } = req.body;
    const user = await userModel.updateOne(
      { id: Number(req.params.id) },
      { name, email },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.delete("/removeUser/:id", async (req, res) => {
  try {
    console.log(req.params.id, typeof req.params.id);
    const user = await userModel.deleteOne({ id: Number(req.params.id) });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

const server = app.listen(3004, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Api listening at http://%s:%s", host, port);
});

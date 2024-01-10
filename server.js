import express from "express";
import { User } from "./user.model.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "backend",
  })
  .then(() => console.log("connected to backend"))
  .catch((err) => console.log("db connection error :", err));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.cookie("cookie", "");
  if (cookie == "") {
    res.render("login");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const isUserAvail = await User.findOne({ username });
  console.log(isUserAvail);
  if (!isUserAvail) {
    res.render("register", { data: "username not found register first" });
    // res.redirect("/register");
  } else {
    res.cookie("cookie", "helloWorld");
    res.render("logout");
  }
});

app.post("/register", async (req, res) => {
  const user = await User.create(req.body);
  res.render("login");
});

app.listen(3000, () => {
  console.log("app listining at port 3000");
});

// import express from "express";
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";
// import { User } from "./user.model.js";
// import jwt from "jsonwebtoken";
// mongoose
//   .connect("mongodb://localhost:27017", {
//     dbName: "backend",
//   })
//   .then(() => {
//     console.log("database connected");
//   })
//   .catch((error) => console.log(error));

// const app = express();
// //middlewares

// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.set("view engine", "ejs");

// const isAuthenticated = async (req, res, next) => {
//   const { token } = req.cookies;
//   if (token) {
//     const decoded = jwt.verify(token, "nxjbavjcvjbcvjvc");
//     req.user = await User.findById(decoded._id);

//     next();
//   } else {
//     res.render("login");
//   }
// };

// app.get("/", isAuthenticated, (req, res) => {
//   console.log(req.user);
//   res.render("logout");
// });
// app.get("/register", (req, res) => {
//   res.render("register");
// });
// app.post("/register", async (req, res) => {
//   const { username } = req.body;
//   const user = await User.findOne({ username });
//   if (user) {
//     return res.redirect("/login");
//   }
//   const data = await User.create(req.body);

//   const token = jwt.sign({ _id: data._id }, "nxjbavjcvjbcvjvc");

//   res.cookie("token", token);
//   res.redirect("/");
// });

// app.get("/logout", (req, res) => {
//   res.cookie("token", "");
//   res.redirect("/");
// });

// app.listen(3000, () => {
//   console.log(`app listining at port 3000`);
// });

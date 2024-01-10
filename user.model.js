import mongoose from "mongoose";
const userScheme = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userScheme);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
      minLength: [2, "too short"],
      maxLength: 50,
    },
    address: {
      type: string,
    },
    email: {
      type: string,
      required: true,
      lowerCase: true,
      unique: true,
      validate: {
        validator: function (value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value);
        },
        message: "invalid email address",
      },
    },
  },
  { timestamps: true }
);

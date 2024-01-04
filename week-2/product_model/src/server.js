import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import productRoute from "../route/products.route.js";

const app = express();
app.use(express.json());

const CONNECTION_URI = process.env.CONNECTION_URI;
console.log("CONNECTION_URI: ", CONNECTION_URI);

mongoose.connect(CONNECTION_URI).then(() => {
  app.listen("6000", () => {
    console.log("listening on port 6000");
  });
});

app.use("/api", productRoute);

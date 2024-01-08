import express from "express";
import mongoose from "mongoose";

const app = express();

const CONNECTION_URI =
  "mongodb+srv://zkh2800:<password>@mongoose0.vwvxpcf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URI).then(() => {
  app.listen(4545, () => {
    console.log("server listening on port 4545");
  });
});

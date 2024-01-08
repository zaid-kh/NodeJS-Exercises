import express from "express";
import "dotenv/config";
import authRouter from "../routes/auth.router.js";
import connectDB from "../config/db.js";

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.json());

// server request logger
server.use((req, res, next) => {
  const { originalUrl, method } = req;
  console.log(
    `*************************${originalUrl} : ${method} REQUEST *************************`
  );
  next();
});

server.get("/", (req, res) => {
  res.send(`bcrypt server
    use endpoint /auth/signIn or /auth/signUp
  `);
});

server.use(`/auth`, authRouter);

// connecting to DB and starting server on retrieved PORT
connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`server listening on port :${PORT} ...`);
  });
});

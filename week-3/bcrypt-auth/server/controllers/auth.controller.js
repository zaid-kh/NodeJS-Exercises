import bcrypt from "bcrypt";
import User from "../models/user.js";
const saltRounds = 10;

export const signUp = async (req, res, next) => {
  try {
    // check if user exists
    const { name, email, password } = req.body;
    const exists = await User.exists({ email: email });
    if (exists) {
      res.end(`email: ${email} already in use!`);
      return;
    }
    // hash password
    bcrypt.hash(password, saltRounds).then(async function (hash) {
      // Store hash in password DB.
      // save user
      const newUser = await User.create({
        name,
        email,
        password: hash,
      });
      newUser.save();
      res.status(201);
      res.end(`${name} registered successfully`);
    });
  } catch (error) {
    console.error("error: ", error);
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    // check if user exists
    const { email, password } = req.body;
    console.log("email, password: ", email, password);
    const user = await User.findOne({ email: email });

    if (!user) {
      res.end(`User with email: ${email} does not exist!`);
      return;
    }
    // compare password with stored hash
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        // grant access (welcome)
        res.end(`Welcome, ${user.name}!`);
      } else {
        res.end("Invalid password!");
      }
    });
  } catch (error) {
    console.error("error: ", error);
    next(error);
  }
};

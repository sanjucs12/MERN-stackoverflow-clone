import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import users from "../models/auth.js";

export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      console.log(`ERROR IN LINE 9 : CONTROLLERS/AUTH.JS`);
      return res.status(400).json({ message: `ALL FIELDS ARE REQUIRED` });
    }

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      console.log(`ERROR IN LINE 15 : CONTROLLERS/AUTH.JS`);
      return res.status(409).json({ message: `USER ALREADY EXISTS` });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12); //12 refers to salt rounds;
      const newUser = await users.create({
        name: name,
        email: email,
        password: hashedPassword,
      });
      const token = jwt.sign(
        { email: newUser.email, id: newUser._id },
        "test",
        { expiresIn: "1h" }
      );
      res.status(201).json({
        message: `SIGNUP SUCCESSFULL`,
        name: newUser.name,
        email: newUser.email,
        id: newUser._id,
        token: token,
      });
      console.log(`SIGNUP SUCCESS : LINE 36 : CONTROLLERS/AUTH.JS`);
    }
  } catch (err) {
    res.status(500).json({ message: `SOMETHING WENT WRONG` });
    console.log(`ERROR IN LINE : 40 : CONTROLLERS/AUTH.JS ${err}`);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log(`ERROR IN LINE 48 : CONTROLLERS/AUTH.JS`);
      return res
        .status(400)
        .json({ message: "PLEASE ENTER THE REQUIRED DETAILS FOR LOGIN" });
    }
    const existingUser = await users.findOne({ email: email });
    if (!existingUser) {
      console.log(`ERROR IN LINE 55 : CONTROLLERS/AUTH.JS`);
      return res.status(404).json({ message: `USER DOES'NT EXISTS` });
    }
    const isPasswordCrt = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCrt) {
      console.log(`ERROR IN LINE 60 : CONTROLLERS/AUTH.JS`);
      return res.status(401).json({ message: `INCORRECT PASSWORD` });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .json({ id: existingUser._id, email: existingUser.email, token: token });
    console.log(`LOGIN SUCCESS : LINE 71 : CONTROLLERS/AUTH.JS`);
  } catch (err) {
    res.status(500).json({ message: `SOMENTHING WENT WRONG` });
    console.log(`ERROR IN LINE 74 : CONTROLLERS/AUTH.JS : ${err}`);
  }
};

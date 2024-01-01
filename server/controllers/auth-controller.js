const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome Controller");
  } catch (err) {
    console.log(err);
  }
};

const register = async (req, res) => {
  try {
    //console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (err) {
    res.status(500).json("internal server error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json("Invalid Credentials");
    }

    //const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json("Invalid email or password");
    }
  } catch (error) {
    //res.status(500).json("internal server error");
    next(error);
  }
};

module.exports = { home, register, login };

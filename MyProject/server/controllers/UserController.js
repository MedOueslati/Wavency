const Person = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register
const register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const existingUser = await Person.findOne({ $or: [{ email }, { username }] });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPerson = await Person.create({ name, username, email, password: hashedPassword });

    res.status(201).json({
      msg: "User created successfully",
      token: generateToken(newPerson._id),
      user: { id: newPerson._id, name, username, email }
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error during registration", error: err.message });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Person.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "No account found. Please register first." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password. Please try again." });
    }

    res.json({
      msg: "Login successful",
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error during login", error: err.message });
  }
};

// Get User Data
const getUserData = async (req, res) => {
  try {
    const user = await Person.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error fetching user data", error: err.message });
  }
};

module.exports = { register, login, getUserData };

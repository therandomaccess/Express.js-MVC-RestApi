import Auth from "../models/auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = await Auth.findOne({ email });
    if (user) {
      return res.status(500).json({
        message: "email zaten kayıtlı",
      });
    }

    if (password.length < 6) {
      return res.status(500).json({
        message: "parola 6 basamaktan uzun olmalı ",
      });
    }

    const newUser = await Auth.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });
    const userToken = await jwt.sign(
      { id: newUser.id },
      process.env.JWT_TOKEN,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      status: "success",
      newUser,
      userToken,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Kullanıcı Bulunamadı",
      });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(401).json({
        message: "parola Hatalı",
      });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN, {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "ok",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};




export { login, register };

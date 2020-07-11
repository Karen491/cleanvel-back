const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uploader = require("../helpers/cloudinary");
const User = require("../models/User");

//Login process
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then((user) => {
      if (user === null)
        return res.status(404).json({ msg: "Usuario no encontrado" });

      bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          const withoutPass = user.toObject();
          delete withoutPass.password;
          const token = jwt.sign({ id: user._id }, process.env.SECRET);
          res.cookie("token", token, {
            expires: new Date(Date.now() + 86400000),
            secure: false,
            httpOnly: true,
          }).json({ user: withoutPass })
        } else {
          return res.status(401).json({ msg: "Contraseña incorrecta" });
        }
      });
    })
    .catch((err) => res.status(400).json({ err }))
});

//Logout process
router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ msg: "logout" });
});


module.exports = router;

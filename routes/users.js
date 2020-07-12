const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uploader = require("../helpers/cloudinary");
const User = require("../models/User");

//Get all users
router.get("/", (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json({
                users: users,
            });
        })
        .catch((err) => res.status(400).json(err));
});

//Search for one specific user
router.get("/:id", (req, res) => {
    const { id } = req.params;
    User.findById(id)
        .then((user) => {
            res.status(200).json({
                user: user,
            });
        })
        .catch((err) => res.status(400).json(err));
});

//Create user
router.post("/", uploader.single("profile_picture"), (req, res) => {
    const profile_picture = req.file.path;
    const { password, ...userValues } = req.body;
    bcrypt.hash(password, 10).then((hashedPassword) => {
        const user = { password: hashedPassword, profile_picture, ...userValues };
        User.create(user)
            .then(() => {
                res.status(201).json({ msg: "Usuario creado con éxito" });
            })
            .catch((err) => res.status(400).json(err));
    });
});

//Edit user without updating photo
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body, { new: true })
        .then((user) => {
            res.status(200).json({ user: user });
        })
        .catch((err) => res.status(400).json(err))
});

//Delete user
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    User.findByIdAndRemove(id)
        .then((user) => {
            res.status(200).json({ user: user });
        })
        .catch((err) => res.status(400).json(err))
});


module.exports = router;
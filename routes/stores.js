const express = require("express");
const router = express.Router();
const Store = require("../models/Store");
const { veryToken, checkRole } = require("../utils/auth");

//Get all stores
router.get("/", veryToken, checkRole(["Administrador", "Usuario"]), (req, res) => {
    Store.find()
        .then((stores) => {
            res.status(200).json({
                stores: stores,
            });
        })
        .catch((err) => res.status(400).json(err));
});

//Create stores
router.post("/", (req, res) => {
    Store.create(req.body)
        .then(() => {
            res.status(201).json({ msg: "Tienda creada con éxito" });
        })
        .catch(err => res.status(400).json(err));
});

//Search for one specific store
router.get("/:id", (req, res) => {
    const { id } = req.params;
    Store.findById(id)
        .then((store) => {
            res.status(200).json({
                store: store,
            });
        })
        .catch((err) => res.status(400).json(err));
});

//Edit store
router.patch("/:id", veryToken, checkRole(["Administrador"]), (req, res) => {
    const { id } = req.params;
    Store.findByIdAndUpdate(id, req.body, { new: true })
        .then((store) => {
            res.status(200).json({ store: store });
        })
        .catch((err) => res.status(400).json(err))
});

//Delete store
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    Store.findByIdAndRemove(id)
        .then((store) => {
            res.status(200).json({ store: store });
        })
        .catch((err) => res.status(400).json(err))
});

module.exports = router;
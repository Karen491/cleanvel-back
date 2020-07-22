const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

//Get all events
router.get("/", (req, res) => {
    Event.find()
        .populate("product", "name")
        .populate("user", "name last_name")
        .then((events) => {
            res.status(200).json({
                events: events,
            })
        })
        .catch((err) => res.status(400).json(err))
});

//Create an event
router.post("/", (req, res) => {
    Event.create(req.body)
        .then(() => {
            res.status(201).json({ msg: "Evento creado con éxito" });
        })
        .catch(err => res.status(400).json(err));
});


module.exports = router;
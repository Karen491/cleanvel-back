const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const { veryToken, checkRole } = require("../utils/auth");

//Get all events
router.get("/", (req, res) => {
    Event.find()
        .populate("product", "name")
        .populate("user", "name last_name")
        .then((events) => {
            res.status(200).json({
                events: events
            })
        })
        .catch((err) => res.status(400).json(err))
});

router.get("/sale", (req, res) => {
    const agg = [
        {
            '$group': {
                '_id': '$product',
                'totalCount': {
                    '$sum': '$value'
                }
            }
        }, {
            '$sort': {
                'totalCount': -1
            }
        }, {
            '$limit': 10
        }
    ]
    Event.aggregate(agg)
        .then((list) => {
            res.status(200).json({
                list: list,
            })
        })
        .catch((err) => res.status(400).json(err));
})

//Create an event
router.post("/", veryToken, checkRole(["Administrador", "Usuario"]), (req, res) => {
    Event.create(req.body)
        .then(() => {
            res.status(201).json({ msg: "Evento creado con éxito" });
        })
        .catch(err => res.status(400).json(err));
});


module.exports = router;